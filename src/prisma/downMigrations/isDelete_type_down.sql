-- AlterTable
ALTER TABLE `users` MODIFY `isDelete` int NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `role` MODIFY `isDelete` int NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `subjects` MODIFY `isDelete` int NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `student_detail` MODIFY `isDelete` int NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `teacherDetails` MODIFY `isDelete` int NOT NULL DEFAULT 0;

