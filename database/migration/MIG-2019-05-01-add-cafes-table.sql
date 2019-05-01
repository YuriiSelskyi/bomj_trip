CREATE TABLE `cafes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `actions` VARCHAR(255) NOT NULL,
  `workingHours` VARCHAR(45) NOT NULL,
  `discounts` VARCHAR(45) NULL,
  `wiFi` TINYINT(1) NOT NULL,
  `paymentByCard` TINYINT(1) NOT NULL,
  `discount` TINYINT(1) NOT NULL,
  `vegetarianMenu` TINYINT(1) NOT NULL,
  `liveMusic` TINYINT(1) NOT NULL,
  `businessLunch` TINYINT(1) NOT NULL,
  `alcohol` TINYINT(1) NOT NULL,
  `terrace` TINYINT(1) NOT NULL,
  `allNight` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `title_UNIQUE` (`title` ASC));

ALTER TABLE `cafes` 
ADD COLUMN `nearYou` TINYINT(1) NOT NULL AFTER `allNight`,
ADD COLUMN `cheapest` TINYINT(1) NOT NULL AFTER `nearYou`,
ADD COLUMN `popular` TINYINT(1) NOT NULL AFTER `cheapest`;
