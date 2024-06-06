/*
  Warnings:

  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `role` ADD COLUMN `isDelete` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `student_detail` ADD COLUMN `isDelete` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `teacherDetails` ADD COLUMN `isDelete` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `isDelete` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `subject`;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `isDelete` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `subjects_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
