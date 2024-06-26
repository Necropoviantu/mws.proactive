CREATE TABLE IF NOT EXISTS `mws_metrics`
(
    `ID`          INT NOT NULL AUTO_INCREMENT,
    `METRIC_ASUO` VARCHAR(255),
    `NAME`        VARCHAR(255),
    `MEANING`     VARCHAR(255),
    `STANDART`    VARCHAR(255),
    `DESCRIPTION` LONGTEXT,
    `TESTS`       LONGTEXT,
    `ALGORITM`    LONGTEXT,
    PRIMARY KEY (`ID`)
);
CREATE TABLE IF NOT EXISTS `mws_metrics_units`
(
    `ID`          INT      NOT NULL AUTO_INCREMENT,
    `METRIC_ID`   INT      NOT NULL,
    `METRIC_ASUO` VARCHAR(255),
    `IP`          VARCHAR(255),
    `PORT`        VARCHAR(255),
    `ABONENT`     VARCHAR(255),
    `ABONENT_ID`  INT,
    `OLD_VALUE`   VARCHAR(255),
    `NEW_VALUE`   VARCHAR(255),
    `DIFF_VALUE`  VARCHAR(255),
    `DATE_CREATE` DATETIME NULL,
    PRIMARY KEY (`ID`)
);
CREATE TABLE IF NOT EXISTS `mws_abonent`
(
    `ID`          INT      NOT NULL AUTO_INCREMENT,
    `ABONENT`     VARCHAR(255),
    `IP`          VARCHAR(255),
    `PORT`        VARCHAR(255),
    `STATUS_ID`   INT,
    `DEAL_ID`     INT,
    `DATE_CREATE` DATETIME NULL,
    PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `mws_abonent_status`
(
    `ID`   INT NOT NULL AUTO_INCREMENT,
    `NAME` VARCHAR(255),
    PRIMARY KEY (`ID`)
);
INSERT INTO `mws_abonent_status` (NAME)
VALUES ('Новое');
INSERT INTO `mws_abonent_status` (NAME)
VALUES ('Повторное');
INSERT INTO `mws_abonent_status` (NAME)
VALUES ('Обработано');

CREATE TABLE IF NOT EXISTS `mws_settings`
(
    `ID`             INT NOT NULL AUTO_INCREMENT,
    `NAME`           VARCHAR(255),
    `SETTING_STRING` LONGTEXT,
    PRIMARY KEY (`ID`)
);
CREATE TABLE IF NOT EXISTS `mws_ip_check`
(
    `ID` INT NOT NULl AUTO_INCREMENT,
    `PERSONAL_ACCOUNT` INT,
    `PESONAL_DATA` VARCHAR(255),
    `IP_ADDRESS` VARCHAR(255),
    `GATEWAY`   VARCHAR(255),
    `PORT`  VARCHAR(255),
    `STATUS_ID` INT,
    `DATE_CREATE` DATETIME NULL,
       PRIMARY KEY (`ID`)
)