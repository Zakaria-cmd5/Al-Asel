/*
  Warnings:

  - Added the required column `price` to the `Men` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `men` ADD COLUMN `price` INTEGER NOT NULL;
