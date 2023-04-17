/*
  Warnings:

  - Added the required column `room_id` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "players" ADD COLUMN     "room_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
