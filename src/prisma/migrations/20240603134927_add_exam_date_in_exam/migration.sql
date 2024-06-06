/*
  Warnings:

  - You are about to drop the column `usersId` on the `subjects` table. All the data in the column will be lost.
  - Added the required column `examDate` to the `exams` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `exams_examName_key` ON `exams`;

-- AlterTable
ALTER TABLE `exams` ADD COLUMN `examDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `subjects` DROP COLUMN `usersId`;
