/*
  Warnings:

  - Added the required column `carrier_id` to the `fleets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fleets" ADD COLUMN     "carrier_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "carries" (
    "id" TEXT NOT NULL,
    "carrierName" TEXT NOT NULL,
    "managerName" TEXT NOT NULL,
    "managerPhone" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "carries_carrierName_key" ON "carries"("carrierName");

-- AddForeignKey
ALTER TABLE "fleets" ADD CONSTRAINT "fleets_carrier_id_fkey" FOREIGN KEY ("carrier_id") REFERENCES "carries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
