CREATE DATABASE  IF NOT EXISTS `sta` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sta`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: sta
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acolitos`
--

DROP TABLE IF EXISTS `acolitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acolitos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acolitos`
--

LOCK TABLES `acolitos` WRITE;
/*!40000 ALTER TABLE `acolitos` DISABLE KEYS */;
INSERT INTO `acolitos` VALUES (1,'Igor'),(2,'Bryan'),(3,'Rickson'),(4,'Pedro Henrique'),(5,'João Victor'),(6,'Lais'),(7,'Ana Flávio '),(8,'Bernardo'),(9,'Lais');
/*!40000 ALTER TABLE `acolitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunidades`
--

DROP TABLE IF EXISTS `comunidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comunidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunidades`
--

LOCK TABLES `comunidades` WRITE;
/*!40000 ALTER TABLE `comunidades` DISABLE KEYS */;
INSERT INTO `comunidades` VALUES (1,'Matriz'),(2,'Rosário'),(3,'Nossa Senhora do Perpétuo Socorro'),(4,'Sagrado Coração de Jesus'),(5,'São Pedro');
/*!40000 ALTER TABLE `comunidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coroinhas`
--

DROP TABLE IF EXISTS `coroinhas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coroinhas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coroinhas`
--

LOCK TABLES `coroinhas` WRITE;
/*!40000 ALTER TABLE `coroinhas` DISABLE KEYS */;
INSERT INTO `coroinhas` VALUES (2,'Maria Paula'),(3,'Mayssa'),(4,'Yasmin'),(5,'Pedro Rios'),(6,'Pedro Paulo'),(7,'Caua Silva'),(8,'Gustavo Pontes'),(9,'Larissa Christine'),(10,'Clara Hohana'),(11,'Adria'),(12,'Lucas Emanuel'),(13,'Maritzza'),(14,'Gustavo Fogassa'),(15,'Waldrone'),(16,'Lucas Trajano'),(17,'Lucas Mikael'),(18,'Raimundo Levi'),(19,'Bruno'),(20,'João Lucas'),(21,'Eduardo'),(22,'Fhael'),(23,'João Candido'),(24,'Esther'),(25,'Larissa Pinheiro'),(26,'Ana Júlia'),(27,'Lohana'),(32,'Luiza Vieira'),(33,NULL);
/*!40000 ALTER TABLE `coroinhas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escala_coroinha`
--

DROP TABLE IF EXISTS `escala_coroinha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escala_coroinha` (
  `id` int NOT NULL AUTO_INCREMENT,
  `missa` varchar(255) DEFAULT NULL,
  `data` varchar(15) DEFAULT NULL,
  `mes` varchar(20) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `dia` varchar(10) DEFAULT NULL,
  `hora` varchar(20) DEFAULT NULL,
  `comunidade` varchar(30) DEFAULT NULL,
  `acolito1` varchar(30) DEFAULT NULL,
  `acolito2` varchar(30) DEFAULT NULL,
  `acolito3` varchar(30) DEFAULT NULL,
  `coroinha1` varchar(30) DEFAULT NULL,
  `coroinha2` varchar(30) DEFAULT NULL,
  `coroinha3` varchar(30) DEFAULT NULL,
  `coroinha4` varchar(30) DEFAULT NULL,
  `coroinha5` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escala_coroinha`
--

LOCK TABLES `escala_coroinha` WRITE;
/*!40000 ALTER TABLE `escala_coroinha` DISABLE KEYS */;
INSERT INTO `escala_coroinha` VALUES (30,'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45','05/07/2022','Junho',2022,'Terça','19h','São Pedro','Pedro Henrique','','','Waldrone','','','',''),(31,'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45','06/07/2022','Junho',2022,'Sábado','17h45','Santa Teresinha','Pedro Henrique',NULL,NULL,'Letícia',NULL,NULL,NULL,NULL),(32,'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45','07/07/2022','Maio',2022,'Quinta','20h','Santa Teresinha','Ana Flávio','','','Mayssa','','','',''),(40,'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45','17/07/2022','Julho',2022,'Domingo','8h30','N.S.Perpétuo Socorro','Igor','','','Lucas Trajano','','','',''),(41,'Domingo: Missa/Celebração Santa Teresinha 7h','30/08/2022','Agosto',2022,'Domingo','8h30','N.S.Perpétuo Socorro','Bryan','','','Letícia','Gustavo Fogassa','','',''),(64,'Domingo: Missa/Celebração Santa Teresinha 7h','01/05/2023','Janeiro',2023,'Domingo','7h','Santa Terezinha','Bryan','','','João Lucas','','','',''),(67,'Domingo: Missa/Celebração Santa Teresinha 7h','10/11/2022','Novembro',2022,'Domingo','7h','Santa Terezinha','Igor','','','Larissa Pinheiro','','','','');
/*!40000 ALTER TABLE `escala_coroinha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escala_ministro`
--

DROP TABLE IF EXISTS `escala_ministro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escala_ministro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `missa` varchar(200) DEFAULT NULL,
  `data` varchar(15) DEFAULT NULL,
  `mes` varchar(20) DEFAULT NULL,
  `ano` varchar(15) DEFAULT NULL,
  `dia` varchar(15) DEFAULT NULL,
  `hora` varchar(10) DEFAULT NULL,
  `comunidade` varchar(50) DEFAULT NULL,
  `ministros` varchar(50) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escala_ministro`
--

LOCK TABLES `escala_ministro` WRITE;
/*!40000 ALTER TABLE `escala_ministro` DISABLE KEYS */;
/*!40000 ALTER TABLE `escala_ministro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ministros`
--

DROP TABLE IF EXISTS `ministros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ministros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ministros`
--

LOCK TABLES `ministros` WRITE;
/*!40000 ALTER TABLE `ministros` DISABLE KEYS */;
/*!40000 ALTER TABLE `ministros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `missa_celebracao`
--

DROP TABLE IF EXISTS `missa_celebracao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `missa_celebracao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `missa_celebracao`
--

LOCK TABLES `missa_celebracao` WRITE;
/*!40000 ALTER TABLE `missa_celebracao` DISABLE KEYS */;
INSERT INTO `missa_celebracao` VALUES (1,'\rDomingo: Missa/Celebração Santa Teresinha 7h'),(2,'Domingo: \rMissa/Celebração N.S.Rosário 7h'),(3,'Domingo: Missa/Celebração N.S.Perpétuo Socorro\r  8h30'),(4,'Domingo: Missa/Celebração  N.S.Rosário\r  17h'),(5,'Domingo: Missa/Celebração Santa Teresinha\r 19h\r  '),(6,'Terça: \r Novena com Adoração e Celebração Eucarística\r Santa Teresinha 19h'),(7,'Terça: \r Novena com Adoração e Celebração Eucarística São Pedro 19h\r '),(8,'Terça: \r Novena com Adoração e Celebração Eucarística  N. S. Perpétuo Socorro 19h'),(9,'Quarta: Terço dos Homens\r Ministração da Palavra de Deus Santa Teresinha 19h'),(10,'Quinta: Novena com Adoração e Celebração Eucarística N. S. Rosário 19h'),(11,'Quinta: Adoração ao Santíssimo Grupo de Oração Santa Teresinha 20h'),(12,'Sábado:\r  Missa/Celebração São Pedro 19h\r'),(13,'Sábado: Missa/Celebração Sagrado Coração de Jesus 19h'),(14,'Sábado:\r Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45');
/*!40000 ALTER TABLE `missa_celebracao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin@gmail.com','admin','true','admin'),(2,'Tiago Braga Souza','tiagobrr17@gmail.com','Bondade23!','true','user'),(17,'Sergio Vinhote','vinhotesergio@gmail.com','1234567','true','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-16 21:20:41
