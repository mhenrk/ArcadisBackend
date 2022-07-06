-- CreateTable
CREATE TABLE `pontos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `xPos` VARCHAR(191) NOT NULL,
    `yPos` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `pontos_nome_key`(`nome`),
    UNIQUE INDEX `pontos_xPos_key`(`xPos`),
    UNIQUE INDEX `pontos_yPos_key`(`yPos`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parametros` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data_coleta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isViolated` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pontosId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `parametros_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parametros_referencia` (
    `id` VARCHAR(191) NOT NULL,
    `parametro` VARCHAR(191) NOT NULL,
    `unidade` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `parametros` ADD CONSTRAINT `parametros_pontosId_fkey` FOREIGN KEY (`pontosId`) REFERENCES `pontos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
