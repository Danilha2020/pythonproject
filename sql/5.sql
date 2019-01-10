START TRANSACTION;

INSERT INTO `shop`.`category` (`id`, `title`, `image_url`, `description`) VALUES ('1', 'Мототехника', 'https://i.ytimg.com/vi/-TrheWf7TXM/maxresdefault.jpg', 'Новая мото техника');
INSERT INTO `shop`.`blog` (`id`, `product_id`, `title`, `body`) VALUES ('2', 'Проверка 2', 'https://i.ytimg.com/vi/T52BgBU5EdE/maxresdefault.jpg', 'Цена ');

COMMIT;


