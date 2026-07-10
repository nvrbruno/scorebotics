-- CreateTable
CREATE TABLE `championship` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `description` VARCHAR(255) NULL,
    `start_date` DATETIME(3) NULL,
    `end_date` DATETIME(3) NULL,
    `status` ENUM('not_started', 'in_progress', 'finished') NOT NULL DEFAULT 'not_started',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event` (
    `id` VARCHAR(191) NOT NULL,
    `championship_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `description` VARCHAR(255) NULL,
    `location` VARCHAR(150) NULL,
    `start_date` DATETIME(3) NULL,
    `end_date` DATETIME(3) NULL,
    `status` ENUM('not_started', 'in_progress', 'finished') NOT NULL DEFAULT 'not_started',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `description` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `institution` VARCHAR(150) NULL,
    `logo_url` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `responsible` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `responsible_cpf_key`(`cpf`),
    UNIQUE INDEX `responsible_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_responsible` (
    `team_id` VARCHAR(191) NOT NULL,
    `responsible_id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`team_id`, `responsible_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participant` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `birth_date` DATETIME(3) NULL,
    `cpf` VARCHAR(14) NULL,
    `bio` VARCHAR(400) NULL,

    UNIQUE INDEX `participant_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_participant` (
    `team_id` VARCHAR(191) NOT NULL,
    `participant_id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(50) NULL,

    PRIMARY KEY (`team_id`, `participant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `judge` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password_hash` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `judge_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `judge_category` (
    `judge_id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`judge_id`, `category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_evaluation` (
    `id` VARCHAR(191) NOT NULL,
    `judge_id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `score` DECIMAL(6, 2) NOT NULL,
    `evaluated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `team_evaluation_judge_id_team_id_event_id_key`(`judge_id`, `team_id`, `event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ranking` (
    `id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,
    `total_score` DECIMAL(8, 2) NOT NULL,
    `last_updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registration` (
    `id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `responsible_id` VARCHAR(191) NOT NULL,
    `accepted_terms` BOOLEAN NOT NULL DEFAULT false,
    `status` ENUM('pending', 'under_review', 'accepted') NOT NULL DEFAULT 'pending',
    `submitted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schedule` (
    `id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time` TIME NULL,
    `location` VARCHAR(150) NULL,
    `status` VARCHAR(30) NOT NULL DEFAULT 'scheduled',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_documents` (
    `id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `type` VARCHAR(50) NULL,
    `file_url` VARCHAR(255) NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `badge` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('participant', 'volunteer', 'admin', 'responsible') NOT NULL,
    `entity_id` VARCHAR(191) NOT NULL,
    `qr_code` VARCHAR(255) NULL,
    `issued_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document` (
    `id` VARCHAR(191) NOT NULL,
    `championship_id` VARCHAR(191) NULL,
    `event_id` VARCHAR(191) NULL,
    `title` VARCHAR(150) NOT NULL,
    `file_url` VARCHAR(255) NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `volunteer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `role` VARCHAR(50) NULL,

    UNIQUE INDEX `volunteer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `volunteer_event` (
    `volunteer_id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`volunteer_id`, `event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `administrator` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `administrator_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `championship_administrator` (
    `championship_id` VARCHAR(191) NOT NULL,
    `administrator_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`championship_id`, `administrator_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_championship_id_fkey` FOREIGN KEY (`championship_id`) REFERENCES `championship`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team` ADD CONSTRAINT `team_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_responsible` ADD CONSTRAINT `team_responsible_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_responsible` ADD CONSTRAINT `team_responsible_responsible_id_fkey` FOREIGN KEY (`responsible_id`) REFERENCES `responsible`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_participant` ADD CONSTRAINT `team_participant_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_participant` ADD CONSTRAINT `team_participant_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `judge_category` ADD CONSTRAINT `judge_category_judge_id_fkey` FOREIGN KEY (`judge_id`) REFERENCES `judge`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `judge_category` ADD CONSTRAINT `judge_category_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_evaluation` ADD CONSTRAINT `team_evaluation_judge_id_fkey` FOREIGN KEY (`judge_id`) REFERENCES `judge`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_evaluation` ADD CONSTRAINT `team_evaluation_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_evaluation` ADD CONSTRAINT `team_evaluation_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ranking` ADD CONSTRAINT `ranking_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ranking` ADD CONSTRAINT `ranking_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ranking` ADD CONSTRAINT `ranking_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registration` ADD CONSTRAINT `registration_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registration` ADD CONSTRAINT `registration_responsible_id_fkey` FOREIGN KEY (`responsible_id`) REFERENCES `responsible`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedule` ADD CONSTRAINT `schedule_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedule` ADD CONSTRAINT `schedule_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_documents` ADD CONSTRAINT `team_documents_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_championship_id_fkey` FOREIGN KEY (`championship_id`) REFERENCES `championship`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `volunteer_event` ADD CONSTRAINT `volunteer_event_volunteer_id_fkey` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `volunteer_event` ADD CONSTRAINT `volunteer_event_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `championship_administrator` ADD CONSTRAINT `championship_administrator_championship_id_fkey` FOREIGN KEY (`championship_id`) REFERENCES `championship`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `championship_administrator` ADD CONSTRAINT `championship_administrator_administrator_id_fkey` FOREIGN KEY (`administrator_id`) REFERENCES `administrator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
