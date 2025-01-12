/*
  Warnings:

  - You are about to drop the column `createdAt` on the `dress` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `dress` table. All the data in the column will be lost.
  - Added the required column `dressCode` to the `Dress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dress` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `dressCode` VARCHAR(191) NOT NULL;
