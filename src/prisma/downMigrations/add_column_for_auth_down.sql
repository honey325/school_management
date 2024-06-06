-- AlterTable
ALTER TABLE `users` DROP COLUMN `activationCode`,
    DROP COLUMN `isActive`,
    DROP COLUMN `password`;

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE INDEX `result_examId_fkey` ON `result`(`examId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

