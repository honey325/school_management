-- AlterTable
ALTER TABLE `subjects` DROP COLUMN `description`,
    DROP COLUMN `usersId`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `exams` MODIFY `id` int NOT NULL;

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE INDEX `result_examId_fkey` ON `result`(`examId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

