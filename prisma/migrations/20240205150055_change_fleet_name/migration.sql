/*
  Warnings:

  - You are about to drop the column `fleet` on the `fleets` table. All the data in the column will be lost.
  - Added the required column `fleetNumber` to the `fleets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fleets" DROP COLUMN "fleet",
ADD COLUMN     "fleetNumber" TEXT NOT NULL;
