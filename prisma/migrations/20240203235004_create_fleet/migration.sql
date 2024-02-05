-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ATIVO', 'INATIVO');

-- CreateTable
CREATE TABLE "fleets" (
    "id" TEXT NOT NULL,
    "fleet" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "first_trailer_plate" TEXT NOT NULL,
    "second_trailer_plate" TEXT NOT NULL,
    "third_trailer_plate" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fleets_pkey" PRIMARY KEY ("id")
);
