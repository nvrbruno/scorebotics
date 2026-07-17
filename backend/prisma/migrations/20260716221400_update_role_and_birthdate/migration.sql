/*
  Warnings:

  - Made the column `birth_date` on table `participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `participant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `participant` MODIFY `birth_date` DATETIME(3) NOT NULL,
    MODIFY `cpf` VARCHAR(14) NOT NULL;

-- AlterTable
ALTER TABLE `team_responsible` MODIFY `role` VARCHAR(50) NULL;
