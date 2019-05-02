ALTER TABLE `shop`.`product`
DROP FOREIGN KEY `fk_category`;
ALTER TABLE `shop`.`product`
DROP COLUMN `price`,
CHANGE COLUMN `description` `image_url` VARCHAR(255) NULL DEFAULT NULL ,
CHANGE COLUMN `category_id` `description` VARCHAR(45) NULL DEFAULT NULL ;
ALTER TABLE `shop`.`product`
ADD CONSTRAINT `fk_category`
  FOREIGN KEY (`description`)
  REFERENCES `shop`.`category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
