-- DropIndex
DROP INDEX `Dress_image_key` ON `dress`;

-- DropIndex
DROP INDEX `Dress_mainCategory_idx` ON `dress`;

-- DropIndex
DROP INDEX `Dress_name_key` ON `dress`;

-- DropIndex
DROP INDEX `Dress_price_idx` ON `dress`;

-- DropIndex
DROP INDEX `Dress_subCategory_idx` ON `dress`;

-- AlterTable
ALTER TABLE `dress` ALTER COLUMN `price` DROP DEFAULT;
