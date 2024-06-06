/*
  Warnings:

  - Made the column `dob` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `attendance` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `users` MODIFY `dob` DATETIME(3) NOT NULL;
