START TRANSACTION;


ALTER TABLE `category`
CHARACTER SET = utf8 , COLLATE = utf8_general_ci,
CHANGE COLUMN `title` `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `image_url` `image_url` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `description` `description` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ;

ALTER TABLE `image`
CHARACTER SET = utf8 , COLLATE = utf8_general_ci,
CHANGE COLUMN `title` `title` VARCHAR(60) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `url` `url` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL ;

ALTER TABLE `product`
CHARACTER SET = utf8 , COLLATE = utf8_general_ci,
CHANGE COLUMN `title` `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `description` `description` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ;

ALTER TABLE `blog`
CHANGE COLUMN `title` `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ;

ALTER TABLE `blog`
DROP FOREIGN KEY `fk_blog_product`;

ALTER TABLE `blog`
DROP COLUMN `product_id1`,
CHANGE COLUMN `title` `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL DEFAULT NULL ,
DROP INDEX `fk_blog_product_idx`;


COMMIT;

