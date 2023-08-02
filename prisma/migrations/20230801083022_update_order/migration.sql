/*
  Warnings:

  - You are about to drop the column `deleted` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Meal` table. All the data in the column will be lost.
  - You are about to drop the column `orderDate` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_orderId_fkey";

-- DropIndex
DROP INDEX "Category_name_idx";

-- DropIndex
DROP INDEX "Meal_name_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "deleted";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "orderId",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderDate";
