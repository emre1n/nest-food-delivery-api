-- CreateTable
CREATE TABLE "Billboard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Billboard_pkey" PRIMARY KEY ("id")
);
