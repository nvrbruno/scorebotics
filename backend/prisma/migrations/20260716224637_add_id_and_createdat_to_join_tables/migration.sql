/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `team_participant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `team_responsible` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `team_participant` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `team_responsible` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `team_participant` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `team_responsible` ADD COLUMN `id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `team_participant_id_key` ON `team_participant`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `team_responsible_id_key` ON `team_responsible`(`id`);
