/*
  Warnings:

  - You are about to drop the column `vicfloraUid` on the `Plant` table. All the data in the column will be lost.
  - The `flowering` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `vicfloraUuid` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "vicfloraUid",
ADD COLUMN     "vicfloraUuid" TEXT NOT NULL,
DROP COLUMN "flowering",
ADD COLUMN     "flowering" TEXT[];
