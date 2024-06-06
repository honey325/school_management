/*
  Warnings:

  - The primary key for the `result` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `result` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `exams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examdate` to the `result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obtainedMarks` to the `result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `subTeacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attendance` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `exams` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `result` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `examdate` DATETIME(3) NOT NULL,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `obtainedMarks` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`stdId`, `subId`, `examId`);

-- AlterTable
ALTER TABLE `subTeacher` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `grno` VARCHAR(191) NULL;
