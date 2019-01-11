START TRANSACTION;

INSERT INTO `shop`.`category` (`id`, `title`, `image_url`, `description`) VALUES ('1', 'BMX WTP Trust ', 'https://i.ytimg.com/vi/-TrheWf7TXM/maxresdefault.jpg', 'Цена: 30000');
INSERT INTO `shop`.`blog` (`id`, `product_id`, `title`, `body`) VALUES ('2', 'BMX WTP Crysis', 'https://i.ytimg.com/vi/T52BgBU5EdE/maxresdefault.jpg', 'Цена: 25000 ');
INSERT INTO `shop`.`category` (`id`, `title`, `image_url`, `description`) VALUES ('3', 'BMX WTP Volta', 'https://i.ytimg.com/vi/4pYu9oGqtbU/maxresdefault.jpg', 'Цена: 35000');

COMMIT;


