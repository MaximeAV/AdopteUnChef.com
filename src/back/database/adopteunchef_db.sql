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

-- Listage de la structure de la table adopteunchef_db. aliments
CREATE TABLE IF NOT EXISTS `aliments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `id_foods` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_foods` (`id_foods`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.aliments : ~0 rows (environ)
DELETE FROM `aliments`;
/*!40000 ALTER TABLE `aliments` DISABLE KEYS */;
/*!40000 ALTER TABLE `aliments` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. a_users_food
CREATE TABLE IF NOT EXISTS `a_users_food` (
  `id_users` int(11) DEFAULT NULL,
  `id_foods` int(11) DEFAULT NULL,
  KEY `id_users` (`id_users`),
  KEY `id_foods` (`id_foods`),
  CONSTRAINT `FK1_id_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_id_foods` FOREIGN KEY (`id_foods`) REFERENCES `foods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.a_users_food : ~0 rows (environ)
DELETE FROM `a_users_food`;
/*!40000 ALTER TABLE `a_users_food` DISABLE KEYS */;
/*!40000 ALTER TABLE `a_users_food` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. foods
CREATE TABLE IF NOT EXISTS `foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(50) DEFAULT NULL,
  `country` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.foods : ~0 rows (environ)
DELETE FROM `foods`;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;

-- Listage de la structure de la table adopteunchef_db. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Listage des données de la table adopteunchef_db.users : ~1 rows (environ)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
	(1, 'Paul', 'paul@laposte.net', '$2a$10$FcrvbL.YqtZb4AOGcBzl2O5oTFgXqA4QtDJ/DMI48LmvFx3sKcP6y');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
