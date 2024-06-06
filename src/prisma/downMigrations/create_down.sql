-- AlterTable
ALTER TABLE `users` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `student_detail` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `teacherDetails` DROP COLUMN `isDelete`;

-- DropTable
DROP TABLE `subjects`;

-- CreateTable
CREATE TABLE `subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `subject_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

