-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'TRY');

-- AlterTable
ALTER TABLE "MenuItem" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'EUR';
