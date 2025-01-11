/*
  Warnings:

  - You are about to drop the `girl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kidcomfortdress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kidunderwire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kidwinterdress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kidwinterpajamas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `men` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mencomfortdress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mensummerpajamas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menunderwire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menwinterpajamas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `women` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `younggirl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `youth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `youthcomfortdress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `youthsummerpajamas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `youthunderwire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `youthwinterpajamas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `girl`;

-- DropTable
DROP TABLE `kid`;

-- DropTable
DROP TABLE `kidcomfortdress`;

-- DropTable
DROP TABLE `kidunderwire`;

-- DropTable
DROP TABLE `kidwinterdress`;

-- DropTable
DROP TABLE `kidwinterpajamas`;

-- DropTable
DROP TABLE `men`;

-- DropTable
DROP TABLE `mencomfortdress`;

-- DropTable
DROP TABLE `mensummerpajamas`;

-- DropTable
DROP TABLE `menunderwire`;

-- DropTable
DROP TABLE `menwinterpajamas`;

-- DropTable
DROP TABLE `women`;

-- DropTable
DROP TABLE `younggirl`;

-- DropTable
DROP TABLE `youth`;

-- DropTable
DROP TABLE `youthcomfortdress`;

-- DropTable
DROP TABLE `youthsummerpajamas`;

-- DropTable
DROP TABLE `youthunderwire`;

-- DropTable
DROP TABLE `youthwinterpajamas`;

-- CreateTable
CREATE TABLE `Dress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `dressLength` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL DEFAULT 0,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `mainCategory` ENUM('MEN', 'WOMEN', 'KID', 'YOUTH') NOT NULL,
    `subCategory` ENUM('UNDER_WIRE', 'WINTER_PAJAMAS', 'SUMMER_PAJAMAS', 'COMFORT_DRESS', 'WINTER_DRESS') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dress_image_key`(`image`),
    UNIQUE INDEX `Dress_name_key`(`name`),
    INDEX `Dress_mainCategory_idx`(`mainCategory`),
    INDEX `Dress_subCategory_idx`(`subCategory`),
    INDEX `Dress_price_idx`(`price`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Color` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DressSizes` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DressSizes_AB_unique`(`A`, `B`),
    INDEX `_DressSizes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DressColors` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DressColors_AB_unique`(`A`, `B`),
    INDEX `_DressColors_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DressSizes` ADD CONSTRAINT `_DressSizes_A_fkey` FOREIGN KEY (`A`) REFERENCES `Dress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DressSizes` ADD CONSTRAINT `_DressSizes_B_fkey` FOREIGN KEY (`B`) REFERENCES `Size`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DressColors` ADD CONSTRAINT `_DressColors_A_fkey` FOREIGN KEY (`A`) REFERENCES `Color`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DressColors` ADD CONSTRAINT `_DressColors_B_fkey` FOREIGN KEY (`B`) REFERENCES `Dress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
