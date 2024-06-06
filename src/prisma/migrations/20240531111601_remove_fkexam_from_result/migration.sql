/*
  Warnings:

  - The primary key for the `result` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `examId` on the `result` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `subjects` table. All the data in the column will be lost.
  - Added the required column `description` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `result` DROP FOREIGN KEY `result_examId_fkey`;

-- AlterTable
ALTER TABLE `exams` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `result` DROP PRIMARY KEY,
    DROP COLUMN `examId`,
    ADD PRIMARY KEY (`stdId`, `subId`);

-- AlterTable
ALTER TABLE `subjects` DROP COLUMN `description`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `usersId` INTEGER NULL;
