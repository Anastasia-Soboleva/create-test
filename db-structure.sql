CREATE TABLE `questions` (
 `q_id` int(11) NOT NULL AUTO_INCREMENT,
 `t_id` int(11) NOT NULL,
 `q_type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
 `q_text` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
 `options` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
 `points` float DEFAULT NULL,
 `t_options` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
 PRIMARY KEY (`q_id`),
 KEY `t_id` (`t_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
tests	CREATE TABLE `tests` (
 `t_id` int(11) NOT NULL AUTO_INCREMENT,
 `cathegory` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
 `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
 `mixture` int(11) NOT NULL,
 `criteria` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
 PRIMARY KEY (`t_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
