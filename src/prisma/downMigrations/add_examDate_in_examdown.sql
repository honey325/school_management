-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `usersId` INTEGER NULL;

-- AlterTable
ALTER TABLE `exams` DROP COLUMN `examDate`;

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE UNIQUE INDEX `exams_examName_key` ON `exams`(`examName` ASC);

-- CreateIndex
CREATE INDEX `result_examId_fkey` ON `result`(`examId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

