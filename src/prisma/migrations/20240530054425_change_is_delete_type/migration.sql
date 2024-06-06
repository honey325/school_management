/*
  Warnings:

  - You are about to alter the column `isDelete` on the `subjects` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `isDelete` on the `role` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `isDelete` on the `student_detail` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `isDelete` on the `teacherDetails` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `isDelete` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `subjects` MODIFY `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `role` MODIFY `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `student_detail` MODIFY `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `teacherDetails` MODIFY `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` MODIFY `isDelete` BOOLEAN NOT NULL DEFAULT false;
