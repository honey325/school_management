/*
  Warnings:

  - Added the required column `activationCode` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `activationCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NULL;
