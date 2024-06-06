-- DropForeignKey
ALTER TABLE `subTeacher` DROP FOREIGN KEY `subTeacher_subId_fkey`;

-- DropForeignKey
ALTER TABLE `subTeacher` DROP FOREIGN KEY `subTeacher_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `attendance` DROP FOREIGN KEY `attendance_stdId_fkey`;

-- DropForeignKey
ALTER TABLE `result` DROP FOREIGN KEY `result_stdId_fkey`;

-- DropForeignKey
ALTER TABLE `result` DROP FOREIGN KEY `result_subId_fkey`;

-- DropForeignKey
ALTER TABLE `result` DROP FOREIGN KEY `result_examId_fkey`;

-- DropIndex
DROP INDEX `users_grno_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `addr`,
    DROP COLUMN `class`,
    DROP COLUMN `contact`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `grno`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `joiningDate`,
    DROP COLUMN `roleId`,
    DROP COLUMN `salary`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `createdAt`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `subjects`;

-- DropTable
DROP TABLE `subTeacher`;

-- DropTable
DROP TABLE `attendance`;

-- DropTable
DROP TABLE `exams`;

-- DropTable
DROP TABLE `result`;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `subjects_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_detail` (
    `id` INTEGER NOT NULL,
    `class` INTEGER NOT NULL,
    `grno` VARCHAR(191) NOT NULL,
    `p_contact` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacherDetails` (
    `id` INTEGER NOT NULL,
    `class` INTEGER NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,
    `joining_date` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

