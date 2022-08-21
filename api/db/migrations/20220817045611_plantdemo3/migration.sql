/*
  Warnings:

  - You are about to drop the column `filters` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `sortOptions` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `collectionType` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `information` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `media` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "filters",
DROP COLUMN "image",
DROP COLUMN "sortOptions",
DROP COLUMN "title",
ADD COLUMN     "collectionType" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "information" JSONB NOT NULL,
ADD COLUMN     "media" JSONB NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);
