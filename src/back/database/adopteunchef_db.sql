-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour adopteunchef_db
CREATE DATABASE IF NOT EXISTS `adopteunchef_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `adopteunchef_db`;

-- Listage de la structure de la table adopteunchef_db. as_image_comments
CREATE TABLE IF NOT EXISTS `as_image_comments` (
  `id_image` int(11) DEFAULT NULL,
  `id_comments` int(11) DEFAULT NULL,
  KEY `id_image` (`id_image`),
  KEY `id_comments` (`id_comments`),
  CONSTRAINT `FK1_id_image` FOREIGN KEY (`id_image`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_id_comments` FOREIGN KEY (`id_comments`) REFERENCES `comments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.as_image_comments : ~0 rows (environ)
DELETE FROM `as_image_comments`;
/*!40000 ALTER TABLE `as_image_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `as_image_comments` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. as_publi_image
CREATE TABLE IF NOT EXISTS `as_publi_image` (
  `id_publication` int(11) DEFAULT NULL,
  `id_images` int(11) DEFAULT NULL,
  KEY `id_publication` (`id_publication`),
  KEY `id_images` (`id_images`),
  CONSTRAINT `FK1_id_publi` FOREIGN KEY (`id_publication`) REFERENCES `publications` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_id_images` FOREIGN KEY (`id_images`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.as_publi_image : ~0 rows (environ)
DELETE FROM `as_publi_image`;
/*!40000 ALTER TABLE `as_publi_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `as_publi_image` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. as_users_tags
CREATE TABLE IF NOT EXISTS `as_users_tags` (
  `id_user` int(11) DEFAULT NULL,
  `id_tags` int(11) DEFAULT NULL,
  KEY `id_user` (`id_user`),
  KEY `id_tags` (`id_tags`),
  CONSTRAINT `FK1_id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_id_tags` FOREIGN KEY (`id_tags`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.as_users_tags : ~1 rows (environ)
DELETE FROM `as_users_tags`;
/*!40000 ALTER TABLE `as_users_tags` DISABLE KEYS */;
INSERT INTO `as_users_tags` (`id_user`, `id_tags`) VALUES
	(2, 1);
/*!40000 ALTER TABLE `as_users_tags` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `author` varchar(50) NOT NULL DEFAULT '',
  `date` datetime NOT NULL,
  `comment` varchar(255) NOT NULL DEFAULT '',
  `likes` int(11) NOT NULL DEFAULT '0',
  `dislikes` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.comments : ~0 rows (environ)
DELETE FROM `comments`;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. images
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `path` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.images : ~0 rows (environ)
DELETE FROM `images`;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. publications
CREATE TABLE IF NOT EXISTS `publications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` longblob,
  `likes` int(11) DEFAULT '0',
  `dislikes` int(11) DEFAULT '0',
  `comments` varchar(50) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments` (`comments`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `FK1_public_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.publications : ~2 rows (environ)
DELETE FROM `publications`;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` (`id`, `title`, `description`, `image`, `likes`, `dislikes`, `comments`, `id_user`) VALUES
	(1, 'Test image', 'Ceci est la description', _binary 0x696D672E706E6A, 0, 0, NULL, 2),
	(2, 'Nouvelle image', 'Ajout de la description à l\'image', _binary 0x6D6F6E696D6167652E6A706567, 0, 0, NULL, 2);
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.roles : ~3 rows (environ)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `role`) VALUES
	(1, 'administrator'),
	(3, 'moderator'),
	(2, 'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. tags
CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.tags : ~11 rows (environ)
DELETE FROM `tags`;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` (`id`, `tag`) VALUES
	(1, 'Africain'),
	(2, 'Américain'),
	(3, 'Asiatique'),
	(4, 'Espagnol'),
	(5, 'Français'),
	(6, 'Healthy'),
	(7, 'Italien'),
	(8, 'JunkFood'),
	(9, 'Sans gluten'),
	(10, 'Végétarien'),
	(11, 'Cuisine du monde');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  CONSTRAINT `FK1_roles` FOREIGN KEY (`role`) REFERENCES `roles` (`role`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.users : ~3 rows (environ)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
	(1, 'Paul', 'paul@laposte.net', '$2a$10$FcrvbL.YqtZb4AOGcBzl2O5oTFgXqA4QtDJ/DMI48LmvFx3sKcP6y', NULL),
	(2, 'Yoann', 'yoann@laposte.net', '$2a$10$eo9LxINkPgMTW6MjbcD7HubHMa3Ih.biaTASRgINeMS8.WewNXGL6', NULL),
	(3, 'Marcel', 'marcel@laposte.net', '$2a$10$78bjT4UFucjogJEdoRHlLuobC5U0ati8lMZNrQ/F6RqI1iSBDH5sK', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
