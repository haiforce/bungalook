/*
  Warnings:

  - You are about to drop the column `information` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `conditions` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flowering` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flowers` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foliage` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantType` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soil` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "information",
ADD COLUMN     "attracts" TEXT[],
ADD COLUMN     "conditions" TEXT NOT NULL,
ADD COLUMN     "flowering" TEXT NOT NULL,
ADD COLUMN     "flowers" TEXT NOT NULL,
ADD COLUMN     "foliage" TEXT NOT NULL,
ADD COLUMN     "plantType" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "soil" TEXT NOT NULL;
