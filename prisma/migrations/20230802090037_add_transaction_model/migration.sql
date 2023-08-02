/*
  Warnings:

  - Changed the type of `paymentType` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'CREDIT_CARD');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paymentType",
ADD COLUMN     "paymentType" "PaymentType" NOT NULL;

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentMethod" "PaymentType" NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
