-- AlterTable
ALTER TABLE `team` ADD COLUMN `status` ENUM('created', 'under_review', 'approved') NOT NULL DEFAULT 'created';
