/*
  Warnings:

  - Made the column `birth_date` on table `responsible` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `responsible` MODIFY `birth_date` DATE NOT NULL;
