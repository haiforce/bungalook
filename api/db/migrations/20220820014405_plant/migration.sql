/*
  Warnings:

  - You are about to drop the column `title` on the `Collections` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Collections` table. All the data in the column will be lost.
  - You are about to drop the column `collectionType` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `collectionId` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collections" DROP COLUMN "title",
DROP COLUMN "url";

-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "collectionType",
ADD COLUMN     "collectionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
