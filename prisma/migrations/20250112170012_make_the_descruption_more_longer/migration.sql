/*
  Warnings:

  - Made the column `description` on table `dress` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `dress` MODIFY `description` TEXT NOT NULL;
