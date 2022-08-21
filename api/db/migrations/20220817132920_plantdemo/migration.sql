/*
  Warnings:

  - The `media` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "tag" TEXT[],
DROP COLUMN "media",
ADD COLUMN     "media" JSONB[];
