/*
  Warnings:

  - You are about to drop the column `dressLength` on the `dress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `dress` DROP COLUMN `dressLength`;

-- CreateTable
CREATE TABLE `Dress_Length` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DressLength` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DressLength_AB_unique`(`A`, `B`),
    INDEX `_DressLength_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DressLength` ADD CONSTRAINT `_DressLength_A_fkey` FOREIGN KEY (`A`) REFERENCES `Dress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DressLength` ADD CONSTRAINT `_DressLength_B_fkey` FOREIGN KEY (`B`) REFERENCES `Dress_Length`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
