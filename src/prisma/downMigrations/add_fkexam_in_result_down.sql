-- DropForeignKey
ALTER TABLE `result` DROP FOREIGN KEY `result_examId_fkey`;

-- AlterTable
ALTER TABLE `result` DROP COLUMN `examId`;

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

