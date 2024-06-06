/*
  Warnings:

  - Added the required column `examId` to the `result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `result` ADD COLUMN `examId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `result` ADD CONSTRAINT `result_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
