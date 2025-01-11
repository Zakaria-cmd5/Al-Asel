/*
  Warnings:

  - The values [COMFORT_DRESS,WINTER_DRESS] on the enum `Dress_subCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `dress` MODIFY `subCategory` ENUM('THOUB', 'UNDER_WIRE', 'WINTER_PAJAMAS', 'SUMMER_PAJAMAS', 'COMFORT_THOUB', 'WINTER_THOUB') NOT NULL;
