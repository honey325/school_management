-- AlterTable
ALTER TABLE `users` MODIFY `dob` datetime(3) NULL;

-- AlterTable
ALTER TABLE `attendance` MODIFY `id` int NOT NULL;

-- CreateIndex
CREATE INDEX `subTeacher_teacherId_fkey` ON `subTeacher`(`teacherId` ASC);

-- CreateIndex
CREATE INDEX `result_examId_fkey` ON `result`(`examId` ASC);

-- CreateIndex
CREATE INDEX `result_subId_fkey` ON `result`(`subId` ASC);

