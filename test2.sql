-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2017 a las 03:24:30
-- Versión del servidor: 5.5.57-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `test`
		DROP DATABASE IF EXISTS test3;
		CREATE DATABASE test3;
		USE test3;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_user`
--

CREATE TABLE IF NOT EXISTS `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

CREATE TABLE IF NOT EXISTS `diagramas` (
  `diagrama_id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  PRIMARY KEY (`diagrama_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;


CREATE TABLE IF NOT EXISTS `figuras` (
  `figura_id` int(11) NOT NULL AUTO_INCREMENT,
  `diagrama` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `colorFondo` varchar(255) NOT NULL,
  `posx` varchar(255) NOT NULL,
  `posy` varchar(255) NOT NULL,
  `texto` text NOT NULL,
  `zindex` varchar(255) NOT NULL,
  PRIMARY KEY (`figura_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;
--
-- Volcado de datos para la tabla `t_user`
--

INSERT INTO `t_user` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'Mas Banyar', 'banyar@yahoo.com', '23235645yghgf'),
(4, 'Boronongddd', 'borononn@yahoo.com', '032bcsjdncsdjc3223'),
(5, 'Nadya Ek', 'nadya@yahoo.com', 'bonbon032932'),
(19, 'nodejs', 'nodejs@gmail.com', '$2a$10$bfYTVsfhYYu.Td0tzy2hqO1Ssz/gWPwaP8rXNSPfS.lQvJPzgclmy'),
(20, 'Juan Carlos', 'carrera1995@hotmail.es', '$2a$10$9aWEdUqWQjDv2leOPJE/ruVo9R7kt8Jz4q1PGnZbyosPREIOP4qnW'),
(21, 'hugo', 'hugoused@hotmail.com', '$2a$10$Dn9F4zTY/qc98paEWUH3RuvxzXA15560JmF.cfv4qCcACpo2LdSvO');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
