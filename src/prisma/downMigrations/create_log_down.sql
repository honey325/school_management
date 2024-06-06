-- AlterTable
ALTER TABLE `users` MODIFY `grno` varchar(191) NOT NULL;

-- AlterTable
ALTER TABLE `subTeacher` DROP COLUMN `createdAt`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `attendance` DROP COLUMN `createdAt`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `exams` DROP COLUMN `createdAt`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `result` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `examdate`,
    DROP COLUMN `isDelete`,
    DROP COLUMN `obtainedMarks`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id` ASC);

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE INDEX `result_examId_fkey` ON `result`(`examId` ASC);

-- CreateIndex
CREATE INDEX `result_stdId_fkey` ON `result`(`stdId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

