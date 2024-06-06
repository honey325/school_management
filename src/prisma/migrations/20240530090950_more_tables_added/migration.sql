/*
  Warnings:

  - You are about to drop the column `created_at` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `isDelete` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isDelete` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `subjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacherDetails` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[grno]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grno` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `joiningDate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `role` DROP COLUMN `created_at`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `created_at`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `roleId`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `addr` VARCHAR(191) NULL,
    ADD COLUMN `class` INTEGER NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `grno` VARCHAR(191) NOT NULL,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `joiningDate` DATETIME(3) NOT NULL,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `salary` INTEGER NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `subjects`;

-- DropTable
DROP TABLE `student_detail`;

-- DropTable
DROP TABLE `teacherDetails`;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `subjects_class_name_key`(`class`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subTeacher` (
    `subId` INTEGER NOT NULL,
    `teacherId` INTEGER NOT NULL,

    PRIMARY KEY (`subId`, `teacherId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendance` (
    `id` INTEGER NOT NULL,
    `stdId` INTEGER NOT NULL,
    `attDate` DATETIME(3) NOT NULL,
    `present` BOOLEAN NOT NULL,

    UNIQUE INDEX `attendance_stdId_attDate_key`(`stdId`, `attDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exams` (
    `id` INTEGER NOT NULL,
    `examName` VARCHAR(191) NOT NULL,
    `totalMarks` INTEGER NOT NULL,

    UNIQUE INDEX `exams_examName_key`(`examName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `result` (
    `id` INTEGER NOT NULL,
    `stdId` INTEGER NOT NULL,
    `subId` INTEGER NOT NULL,
    `examId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_grno_key` ON `users`(`grno`);

-- AddForeignKey
ALTER TABLE `subTeacher` ADD CONSTRAINT `subTeacher_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subTeacher` ADD CONSTRAINT `subTeacher_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendance` ADD CONSTRAINT `attendance_stdId_fkey` FOREIGN KEY (`stdId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `result` ADD CONSTRAINT `result_stdId_fkey` FOREIGN KEY (`stdId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `result` ADD CONSTRAINT `result_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `result` ADD CONSTRAINT `result_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
