/*
  Warnings:

  - The `filters` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `image` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "image" JSONB NOT NULL,
ADD COLUMN     "sortOptions" JSONB[],
DROP COLUMN "filters",
ADD COLUMN     "filters" TEXT[];
