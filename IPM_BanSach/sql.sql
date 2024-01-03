-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quanlybansach
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

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
-- Table structure for table `chitietdonhang`
--

DROP TABLE IF EXISTS `chitietdonhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietdonhang` (
  `maChiTietDonHang` int(11) NOT NULL AUTO_INCREMENT,
  `maDonHang` int(11) DEFAULT NULL,
  `sanp_id` int(11) DEFAULT NULL,
  `soLuong` int(10) DEFAULT NULL,
  `gia` int(10) DEFAULT NULL,
  PRIMARY KEY (`maChiTietDonHang`),
  KEY `maDonHang` (`maDonHang`),
  KEY `sanp_id` (`sanp_id`),
  CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`maDonHang`) REFERENCES `donhang` (`maDonHang`),
  CONSTRAINT `chitietdonhang_ibfk_2` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietdonhang`
--

LOCK TABLES `chitietdonhang` WRITE;
/*!40000 ALTER TABLE `chitietdonhang` DISABLE KEYS */;
INSERT INTO `chitietdonhang` VALUES (82,88,2,1,210000),(83,88,37,1,18700),(84,89,2,1,210000),(85,89,37,1,18700),(86,89,10,1,213400),(87,90,2,2,210000),(88,90,37,1,18700),(89,90,10,1,213400),(90,91,10,1,213400),(91,91,22,1,123120);
/*!40000 ALTER TABLE `chitietdonhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonban`
--

DROP TABLE IF EXISTS `chitiethoadonban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonban` (
  `maChiTietHoaDonBan` int(11) NOT NULL AUTO_INCREMENT,
  `soHoaDon` int(11) DEFAULT NULL,
  `sanp_id` int(11) DEFAULT NULL,
  `soLuong` int(10) DEFAULT NULL,
  `giaBan` int(10) DEFAULT NULL,
  PRIMARY KEY (`maChiTietHoaDonBan`),
  KEY `sanp_id` (`sanp_id`),
  KEY `soHoaDon` (`soHoaDon`),
  CONSTRAINT `chitiethoadonban_ibfk_1` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`),
  CONSTRAINT `chitiethoadonban_ibfk_2` FOREIGN KEY (`soHoaDon`) REFERENCES `hoadonban` (`soHoaDon`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonban`
--

LOCK TABLES `chitiethoadonban` WRITE;
/*!40000 ALTER TABLE `chitiethoadonban` DISABLE KEYS */;
INSERT INTO `chitiethoadonban` VALUES (1,7,1,2,123000),(2,1,2,2,0),(3,1,1,4,123000),(4,8,1,2,213400),(5,3,1,1,123000),(6,9,1,2,213400),(7,11,1,1,213400),(8,12,1,3,213400),(9,14,1,1,213400),(10,2,1,1,123000),(11,4,1,1,123000),(12,6,3,1,123000),(13,6,4,1,213000),(14,13,2,1,213400),(15,30,2,1,213400),(16,35,1,1,213400),(17,35,2,1,213400),(18,38,1,1,213400),(19,39,1,3,125000),(20,39,2,1,459000),(21,40,1,10,125000),(22,NULL,NULL,NULL,NULL),(23,NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL),(25,38,1,1,125000),(26,38,1,1,125000),(27,38,1,1,125000),(28,46,2,10,213400),(29,NULL,1,1,125000),(30,48,1,1,125000),(31,49,10,1,213400),(32,49,37,1,18700),(33,49,22,1,123120),(34,NULL,10,1,213400),(35,NULL,37,1,18700),(36,NULL,22,1,123120),(37,59,10,1,213400),(38,59,37,1,18700),(39,59,22,1,123120),(40,60,10,1,213400),(41,60,22,1,123120),(42,60,37,1,18700),(43,61,10,1,213400),(44,61,37,1,18700),(45,61,22,1,123120),(46,62,10,1,213400),(47,62,37,1,18700),(48,63,10,1,213400),(49,63,37,1,18700),(50,63,22,1,123120),(51,63,2,1,213400),(52,64,2,1,210000),(53,64,37,1,18700),(54,65,10,1,213400),(55,65,2,1,210000),(56,65,37,1,18700);
/*!40000 ALTER TABLE `chitiethoadonban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonnhap`
--

DROP TABLE IF EXISTS `chitiethoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonnhap` (
  `maChiTietHoaDonNhap` int(11) NOT NULL AUTO_INCREMENT,
  `soHoaDon` int(11) DEFAULT NULL,
  `sanp_id` int(11) DEFAULT NULL,
  `soLuong` int(10) DEFAULT NULL,
  `donGia` int(10) DEFAULT NULL,
  PRIMARY KEY (`maChiTietHoaDonNhap`),
  KEY `sanp_id` (`sanp_id`),
  KEY `soHoaDon` (`soHoaDon`),
  CONSTRAINT `chitiethoadonnhap_ibfk_1` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`),
  CONSTRAINT `chitiethoadonnhap_ibfk_2` FOREIGN KEY (`soHoaDon`) REFERENCES `hoadonnhap` (`soHoaDon`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonnhap`
--

LOCK TABLES `chitiethoadonnhap` WRITE;
/*!40000 ALTER TABLE `chitiethoadonnhap` DISABLE KEYS */;
INSERT INTO `chitiethoadonnhap` VALUES (1,1,1,100,1230000),(2,2,22,100,1230000),(3,1,26,1000,1230000),(4,1,2,100,1230000),(10,2,3,100,2354432),(11,1,5,100,2314835),(12,1,1,10,125000),(13,1,2,10,213400),(14,5,2,10,213400),(15,2,5,10,213400),(16,3,2,5,213400),(17,4,10,100,213400),(18,4,20,10,123000),(19,7,15,10,123120),(20,7,10,20,213400),(21,6,11,100,213400),(22,8,1,10,125000),(23,8,2,10,213400),(24,8,1,10,125000),(25,1,1,10,125000),(26,1,1,10,125000),(30,9,1,100,125000),(31,9,4,10,213400);
/*!40000 ALTER TABLE `chitiethoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietkho`
--

DROP TABLE IF EXISTS `chitietkho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietkho` (
  `maChiTietKho` int(11) NOT NULL AUTO_INCREMENT,
  `maKho` int(11) DEFAULT NULL,
  `sanp_id` int(11) DEFAULT NULL,
  `soLuong` int(10) DEFAULT NULL,
  PRIMARY KEY (`maChiTietKho`),
  KEY `maKho` (`maKho`),
  KEY `sanp_id` (`sanp_id`),
  CONSTRAINT `chitietkho_ibfk_1` FOREIGN KEY (`maKho`) REFERENCES `kho` (`maKho`),
  CONSTRAINT `chitietkho_ibfk_2` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`),
  CONSTRAINT `CHK_PersonAge` CHECK (`soLuong` >= 0)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietkho`
--

LOCK TABLES `chitietkho` WRITE;
/*!40000 ALTER TABLE `chitietkho` DISABLE KEYS */;
INSERT INTO `chitietkho` VALUES (2,1,1,344),(3,1,2,59),(4,1,3,92),(5,1,4,94),(6,1,5,100),(7,1,6,100),(8,1,8,100),(9,1,9,100),(10,1,10,95),(11,1,11,100),(12,1,12,0),(13,1,13,100),(14,1,14,100),(15,1,18,0),(16,1,19,0),(17,1,20,100),(18,1,21,100),(19,1,22,97),(20,1,23,100),(21,1,24,100),(22,1,25,100),(23,1,26,1000),(24,1,27,100),(25,1,28,100),(26,1,37,96);
/*!40000 ALTER TABLE `chitietkho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sanp_id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sanp_id` (`sanp_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `taikhoan` (`maTaiKhoan`),
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `taikhoan` (`maTaiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,4,'hay',1),(2,4,'hay',1),(3,2,'Hay',1),(4,2,'5 sao',1),(5,37,'Hay',1),(6,2,'Rất hay đó',3);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `danhmuc_list`
--

DROP TABLE IF EXISTS `danhmuc_list`;
/*!50001 DROP VIEW IF EXISTS `danhmuc_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `danhmuc_list` AS SELECT 
 1 AS `danhmuc_id`,
 1 AS `danhmuc_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `danhmucs`
--

DROP TABLE IF EXISTS `danhmucs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danhmucs` (
  `danhmuc_id` int(11) NOT NULL AUTO_INCREMENT,
  `danhmuc_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`danhmuc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhmucs`
--

LOCK TABLES `danhmucs` WRITE;
/*!40000 ALTER TABLE `danhmucs` DISABLE KEYS */;
INSERT INTO `danhmucs` VALUES (1,'Khoa học - Xã hội'),(2,'Hài hước'),(4,'Văn học nước ngoài'),(8,'Lãng mạn'),(10,'Văn học Việt Nam'),(11,'Chúc mẹ ngủ ngon');
/*!40000 ALTER TABLE `danhmucs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donhang` (
  `maDonHang` int(11) NOT NULL AUTO_INCREMENT,
  `maKhachHang` int(11) DEFAULT NULL,
  `ngayDat` date DEFAULT NULL,
  `trangThai` varchar(50) DEFAULT NULL,
  `giaTien` int(11) NOT NULL,
  `trangThaiThanhToan` varchar(50) NOT NULL DEFAULT 'Chưa thanh toán',
  `trangThaiGiaoHang` varchar(45) DEFAULT 'Chưa giao hàng',
  PRIMARY KEY (`maDonHang`),
  KEY `maKhachHang` (`maKhachHang`),
  CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`maKhachHang`) REFERENCES `khachhang` (`maKhachHang`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donhang`
--

LOCK TABLES `donhang` WRITE;
/*!40000 ALTER TABLE `donhang` DISABLE KEYS */;
INSERT INTO `donhang` VALUES (88,95,'2023-12-25','Chưa xác nhận',228700,'Chưa thanh toán','Chưa giao hàng'),(89,96,'2023-12-27','Đã xác nhận',442100,'Đã thanh toán','Giao hàng thành công'),(90,97,'2023-12-27','Chưa xác nhận',652100,'Chưa thanh toán','Chưa giao hàng'),(91,98,'2023-12-29','Chưa xác nhận',336520,'Chưa thanh toán','Chưa giao hàng');
/*!40000 ALTER TABLE `donhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaca`
--

DROP TABLE IF EXISTS `giaca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaca` (
  `maSo` int(11) NOT NULL AUTO_INCREMENT,
  `sanp_id` int(11) DEFAULT NULL,
  `ngayBatDau` date DEFAULT NULL,
  `ngayKetThuc` date DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  PRIMARY KEY (`maSo`),
  KEY `sanp_id` (`sanp_id`),
  CONSTRAINT `giaca_ibfk_1` FOREIGN KEY (`sanp_id`) REFERENCES `sanpham` (`sanp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaca`
--

LOCK TABLES `giaca` WRITE;
/*!40000 ALTER TABLE `giaca` DISABLE KEYS */;
INSERT INTO `giaca` VALUES (1,13,'2023-05-19','2023-05-19',123120),(5,4,'2023-05-03','2023-05-04',213400),(6,5,'2023-05-03','2023-05-04',213400),(7,6,'2023-05-03','2023-05-04',213400),(8,8,'2023-05-03','2023-05-04',132000),(9,9,'2023-05-03','2023-05-04',132000),(10,10,'2023-05-03','2023-05-04',213400),(11,11,'2023-05-03','2023-05-04',213400),(12,14,'2023-05-26','2023-05-26',123120),(13,15,'2023-05-29','2023-05-29',123120),(14,12,'2023-05-02',NULL,213400),(15,13,'2023-05-18',NULL,213000),(16,16,'2023-05-29','2023-05-29',123000),(17,17,'2023-05-30','2023-05-30',123120),(18,18,'2023-05-30','2023-05-30',123120),(19,19,'2023-05-30','2023-05-30',213111),(20,20,'2023-05-30','2023-05-30',123000),(21,21,'2023-05-30','2023-05-30',123000),(22,22,'2023-05-30','2023-05-30',123120),(23,23,'2023-05-30','2023-05-30',123000),(24,24,'2023-05-30','2023-05-30',123000),(25,25,'2023-05-30','2023-05-30',123120),(26,26,'2023-05-30','2023-05-30',123120),(27,27,'2023-05-30','2023-05-30',123120),(28,28,'2023-05-30','2023-05-30',123120),(29,31,'2023-09-25',NULL,256000),(30,32,'2023-09-25',NULL,210000),(31,34,'2023-10-08',NULL,NULL),(33,36,'2023-10-08',NULL,210000),(34,37,'2023-10-07',NULL,18700),(35,38,'2023-10-09',NULL,210000),(36,39,'2023-10-19',NULL,NULL),(37,40,'2023-10-19',NULL,NULL),(40,45,'2023-12-13',NULL,110000),(41,46,'2023-12-27',NULL,1),(44,1,'2023-12-27',NULL,125000),(45,2,NULL,NULL,210000),(46,3,NULL,NULL,143000);
/*!40000 ALTER TABLE `giaca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonban`
--

DROP TABLE IF EXISTS `hoadonban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonban` (
  `soHoaDon` int(11) NOT NULL AUTO_INCREMENT,
  `ngayBan` date DEFAULT NULL,
  `maKhachHang` int(11) DEFAULT NULL,
  `giaTien` int(11) NOT NULL,
  PRIMARY KEY (`soHoaDon`),
  KEY `maKhachHang` (`maKhachHang`),
  CONSTRAINT `hoadonban_ibfk_1` FOREIGN KEY (`maKhachHang`) REFERENCES `khachhang` (`maKhachHang`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonban`
--

LOCK TABLES `hoadonban` WRITE;
/*!40000 ALTER TABLE `hoadonban` DISABLE KEYS */;
INSERT INTO `hoadonban` VALUES (1,'2023-05-03',1,1588660),(2,'2023-05-03',29,1407660),(3,'2023-05-03',6,1518660),(4,'2023-05-03',29,1295660),(6,'2023-05-03',18,1386660),(7,'2023-05-19',4,1295660),(8,'2023-05-19',5,1296660),(9,'2023-05-22',6,1191660),(11,'2023-05-23',8,1608882),(12,'2023-05-23',9,1407660),(13,'2023-05-23',10,1389104),(14,'2023-05-23',11,1389660),(30,'2023-05-24',27,1065660),(35,'2023-05-29',33,1492460),(38,'2023-06-02',36,1654060),(39,'2023-10-07',36,1522660),(40,'2023-10-19',1,2315660),(45,'2023-10-19',36,1065660),(46,'2023-10-19',36,3199660),(47,'2023-10-19',36,1065660),(48,'2023-10-19',36,1190660),(49,'2023-10-19',77,1420880),(50,'2023-10-19',77,1065660),(51,'2023-10-19',1,1065660),(52,'2023-10-19',1,1065660),(53,'2023-10-19',1,1065660),(54,'2023-10-19',1,1065660),(55,'2023-10-19',1,1065660),(56,'2023-10-19',77,1065660),(57,'2023-10-19',1,1065660),(58,'2023-10-19',1,1065660),(59,'2023-10-19',77,1065660),(60,'2023-10-19',75,710440),(61,'2023-10-19',77,355220),(62,'2023-10-19',74,232100),(63,'2023-10-19',78,568620),(64,'2023-12-27',95,228700),(65,'2023-12-27',96,442100);
/*!40000 ALTER TABLE `hoadonban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonnhap`
--

DROP TABLE IF EXISTS `hoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonnhap` (
  `soHoaDon` int(11) NOT NULL AUTO_INCREMENT,
  `ngayNhap` date DEFAULT NULL,
  `maNguoiDung` int(11) DEFAULT NULL,
  `nsx_id` int(11) DEFAULT NULL,
  `giaTien` int(11) NOT NULL,
  PRIMARY KEY (`soHoaDon`),
  KEY `nsx_id` (`nsx_id`),
  KEY `maNguoiDung` (`maNguoiDung`),
  CONSTRAINT `hoadonnhap_ibfk_1` FOREIGN KEY (`nsx_id`) REFERENCES `nhasx` (`nsx_id`),
  CONSTRAINT `hoadonnhap_ibfk_2` FOREIGN KEY (`maNguoiDung`) REFERENCES `nguoidung` (`maNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonnhap`
--

LOCK TABLES `hoadonnhap` WRITE;
/*!40000 ALTER TABLE `hoadonnhap` DISABLE KEYS */;
INSERT INTO `hoadonnhap` VALUES (1,'2023-05-29',1,1,5884000),(2,'2023-05-30',1,1,2134000),(3,'2023-06-02',1,1,1067000),(4,'2023-06-02',1,1,22570000),(5,'2023-10-17',1,2,2134000),(6,'2023-10-17',1,2,21340000),(7,'2023-10-18',1,3,5499200),(8,'2023-10-19',1,1,4634000),(9,'2023-12-16',1,1,2134000);
/*!40000 ALTER TABLE `hoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `maKhachHang` int(11) NOT NULL AUTO_INCREMENT,
  `tenKhachHang` varchar(50) DEFAULT NULL,
  `diaChi` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `sdt` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`maKhachHang`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Đinh Thành Luân','Hà Nội',NULL,'0987878787'),(2,'Đinh Thành Luân','Hà Nội',NULL,'0987878787'),(3,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(4,'Đinh Hồng Đăng','Hà Nội',NULL,'0987878786'),(5,'Nguyễn Thiện Thuật','Hà Nội',NULL,'0987878786'),(6,'Phan Hoành Anh','Hà Nội',NULL,'0987878786'),(7,'Nguyễn Văn An','Hà Nội',NULL,'0987878786'),(8,'Nguyễn Văn An','Hà Nội',NULL,'0987878786'),(9,'Nguyễn Văn An','Hà Nội',NULL,'0987878786'),(10,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(11,'Nguyễn Văn An','Hà Nội',NULL,'0987878786'),(12,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(13,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(14,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(15,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(16,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(17,'Nguyễn Văn An','Nhật Bản',NULL,'0987878786'),(18,'Nguyễn Văn An','Nhật Bản',NULL,'0987878786'),(19,'Nguyễn Văn An','Nhật Bản',NULL,'0987878786'),(20,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(21,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(22,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(23,'a','a',NULL,'a'),(24,'a','a',NULL,'132'),(25,'a','a',NULL,'a'),(26,'a','a',NULL,'a'),(27,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(28,'Đinh Thành Luân','Nhật Bản',NULL,'0987878786'),(29,'Nguyễn Quang Anh','Hà Nội',NULL,'0987878786'),(30,'Lê Thị Hoà','Hà Nội',NULL,'0987878786'),(31,'Lê Thị Hoà','Hà Nội',NULL,'0987878786'),(32,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(33,'Nguyễn Quang Anh','Nhật Bản',NULL,'0987878786'),(34,'Đinh Thành Luân','Hà Nội',NULL,'0987878786'),(35,'Nguyễn Văn An','Nhật Bản',NULL,'0987878786'),(36,'Lê Thị Hoà','Nhật Bản',NULL,'0987878786'),(37,'\"string\"','\"a\"','\"sd\"','1'),(38,'\"a\"','\"a\"','\"sd\"','1'),(39,NULL,NULL,NULL,NULL),(40,NULL,NULL,NULL,NULL),(41,NULL,NULL,NULL,NULL),(42,NULL,NULL,NULL,NULL),(43,NULL,NULL,NULL,NULL),(44,'John Doe','johndoe@example.com','johndoe@example.com','0912345678'),(45,'John Doe','johndoe@example.com','johndoe@example.com','0912345678'),(46,'John Doe','johndoe@example.com','johndoe@example.com','0912345678'),(47,'John Doe','johndoe@example.com','johndoe@example.com','0912345678'),(48,'John Doe','johndoe@example.com','johndoe@example.com','0912345678'),(49,'Nguyễn Quốc Anh','Mỹ Hào, Hưng Yên,','anh@gmail.com','0978765657'),(51,'luan','johndoe@example.com','johndoe@example.com','0912345678'),(52,'luan','johndoe@example.com','johndoe@example.com','0912345678'),(53,'Đinh Thành Luân','Hưng Yên','luan@example.com','0912345678'),(54,'Nguyễn Quang Anh','Hà Nội','anh@gmail.com','0987878786'),(55,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(56,'luan','Hưng Yên','luan@gmail.com','0987676567'),(57,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(58,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(59,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(60,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(61,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(62,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(63,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(64,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(65,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(66,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(67,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(68,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(69,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(70,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(71,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(72,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0965920038'),(73,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(74,'Vũ','Mỹ Hào, Hưng Yên','Vu@gmail.com','0976665434'),(75,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0987878787'),(76,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(77,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(78,'Đinh Thành Luân','Hà Nội','luan2k2hy@gmail.com','0971877014'),(79,'luan','Hưng Yên','luan@gmail.com','0987676567'),(80,'luan','Hưng Yên','luan@gmail.com','0987676567'),(81,'luan','Hưng Yên','luan@gmail.com','0987676567'),(82,'luan','Hưng Yên','luan@gmail.com','0987676567'),(83,'luan','Hưng Yên','luan@gmail.com','0987676567'),(84,'luan','Hưng Yên','luan@gmail.com','0987676567'),(85,'luan','Hưng Yên','luan@gmail.com','0987676567'),(86,'luan','Hưng Yên','luan@gmail.com','0987676567'),(87,'Nguyễn Quang Anh','Đặng Lễ-Ân Thi-Hưng Yên','fuji@gmail.com','0987878786'),(88,'Đinh Thành Luân','Đặng Lễ-Ân Thi-Hưng Yên','fuji@gmail.com','0987878786'),(89,'Nguyễn Văn An','Đặng Lễ-Ân Thi-Hưng Yên','luanhy2k2@gmail.com','0987878786'),(90,'Đinh Thành Luân','Đặng Lễ-Ân Thi-Hưng Yên','luanhy2k2@gmail.com','0987878786'),(91,'Đinh Thành Luân','Đặng Lễ-Ân Thi-Hưng Yên','luanhy2k2@gmail.com','0987878786'),(92,'Đinh Thành Văn','Đặng Lễ-Ân Thi-Hưng Yên','luanhy2k2@gmail.com','0987878786'),(93,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(94,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(95,'Đinh Thành Luân','Hưng Yên','luanhy@gmail.com','0971877014'),(96,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(97,'Đinh Thành Luân','Hưng Yên','luanhy@gmaik.com','0971877014'),(98,'Nguyễn Quang Anh','Đặng Lễ, Ân Thi, Hưng Yên','anh@gmail.com','0986270123');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kho`
--

DROP TABLE IF EXISTS `kho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kho` (
  `maKho` int(11) NOT NULL AUTO_INCREMENT,
  `tenKho` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`maKho`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kho`
--

LOCK TABLES `kho` WRITE;
/*!40000 ALTER TABLE `kho` DISABLE KEYS */;
INSERT INTO `kho` VALUES (1,'Nhã Nam');
/*!40000 ALTER TABLE `kho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaisp`
--

DROP TABLE IF EXISTS `loaisp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaisp` (
  `loai_id` int(11) NOT NULL AUTO_INCREMENT,
  `loai_name` varchar(50) DEFAULT NULL,
  `danhmuc_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`loai_id`),
  KEY `danhmuc_id` (`danhmuc_id`),
  CONSTRAINT `loaisp_ibfk_1` FOREIGN KEY (`danhmuc_id`) REFERENCES `danhmucs` (`danhmuc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisp`
--

LOCK TABLES `loaisp` WRITE;
/*!40000 ALTER TABLE `loaisp` DISABLE KEYS */;
INSERT INTO `loaisp` VALUES (1,'Văn học Việt Nam',1),(4,'Văn học nước ngoài',1),(5,'Huyền ảo/giả tưởng',1),(10,'Comedy',1),(11,'Kiếm hiệp',1),(13,'Thiếu nhi',1),(14,'Tìm cảm-Lãng mạn',1),(15,'Hài hước',1),(16,'Vui nhộn',1);
/*!40000 ALTER TABLE `loaisp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoidung` (
  `maNguoiDung` int(11) NOT NULL AUTO_INCREMENT,
  `hoTen` varchar(50) DEFAULT NULL,
  `ngaySinh` date DEFAULT NULL,
  `gioiTinh` date DEFAULT NULL,
  `diaChi` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `sdt` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`maNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'Đinh Thành Luân','2023-05-10','0000-00-00','Hà Nội','luan2k2hy@gmail.com','0971877014'),(2,'Đinh Thành Luân','2002-09-15','0000-00-00','Hưng Yên','luanhy@gmaik.com','0971877014'),(3,'Nguyễn Quang Anh','2023-10-07','0000-00-00','Đặng Lễ, Ân Thi, Hưng Yên','anh@gmail.com','0986270123'),(4,'Vũ','2023-10-27','0000-00-00','Mỹ Hào, Hưng Yên','Vu@gmail.com','0976665434'),(5,'vuhieu','2001-08-19','0000-00-00','An Thi,Hung Yen','vhieu@gmail.com','0969499375');
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhasx`
--

DROP TABLE IF EXISTS `nhasx`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhasx` (
  `nsx_id` int(11) NOT NULL AUTO_INCREMENT,
  `nsx_name` varchar(50) DEFAULT NULL,
  `diaChi` varchar(50) DEFAULT NULL,
  `sdt` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`nsx_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhasx`
--

LOCK TABLES `nhasx` WRITE;
/*!40000 ALTER TABLE `nhasx` DISABLE KEYS */;
INSERT INTO `nhasx` VALUES (1,'Nhã Nam','Hồ Hoàn Kiếm, Hà Nội','965765432'),(2,'IPM','Thanh Long, Hà Nội','965765432'),(3,'Phụ nữ','Nguyễn Thiện Thuật, Hà Nội','965765432'),(4,'Nhã Nam','Hà Nội','965765432'),(5,'Kim Đồng','Hà Nội','76567888');
/*!40000 ALTER TABLE `nhasx` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replycomment`
--

DROP TABLE IF EXISTS `replycomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replycomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_comment` int(11) NOT NULL,
  `content` varchar(500) NOT NULL,
  `id_us` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_comment` (`id_comment`),
  KEY `id_us` (`id_us`),
  CONSTRAINT `replycomment_ibfk_1` FOREIGN KEY (`id_comment`) REFERENCES `comment` (`id`),
  CONSTRAINT `replycomment_ibfk_2` FOREIGN KEY (`id_us`) REFERENCES `taikhoan` (`maTaiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replycomment`
--

LOCK TABLES `replycomment` WRITE;
/*!40000 ALTER TABLE `replycomment` DISABLE KEYS */;
INSERT INTO `replycomment` VALUES (1,1,'tuyệt',1),(2,3,'tuyệt',1),(3,3,'tuyệt',1);
/*!40000 ALTER TABLE `replycomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `sanp_id` int(11) NOT NULL AUTO_INCREMENT,
  `sanp_name` varchar(50) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `tg_id` int(11) DEFAULT NULL,
  `loai_id` int(11) DEFAULT NULL,
  `nsx_id` int(11) DEFAULT NULL,
  `soTrang` int(5) DEFAULT NULL,
  `tomTat` varchar(2000) DEFAULT NULL,
  `namsx` date DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`sanp_id`),
  KEY `loai_id` (`loai_id`),
  KEY `nsx_id` (`nsx_id`),
  KEY `tg_id` (`tg_id`),
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`loai_id`) REFERENCES `loaisp` (`loai_id`),
  CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`nsx_id`) REFERENCES `nhasx` (`nsx_id`),
  CONSTRAINT `sanpham_ibfk_3` FOREIGN KEY (`tg_id`) REFERENCES `tg` (`tG_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (1,'Mã mẫu tửs','24x18',2,4,3,234,'<p>...</p>\n','2023-12-23','1YF9HFCE.jpg'),(2,'Đại Nam','16x18',1,1,1,123,'Một bức thông điệp cầu cứu 600 năm tuổi từ vị giáo sư sử học đại học Yale gửi cho các sinh viên của mình ở thời hiện tại. Trên sa mạc rộng lớn không một bóng người, một người đàn ông bỗng xuất hiện, không một phương tiện di chuyển. Giữa hai sự kiện kì lạ khác nhau nửa vòng trái đất, có một điểm chung khó ngờ, đó là trung tâm nghiên cứu công nghệ lượng tử ITC...  Với chủ đề đã làm say đắm khắp các khoa học gia lẫn tiểu thuyết gia viễn tưởng từ hồi các Thuyết Lượng tử và Tương đối ra đời, MICHAEL CRICHTON, cha đẻ của Công viên kỷ Jura và Thế giới nghịch, cưỡi lên Dòng thời gian để tiến vào một cuộc \"du hành thời gian\", bắt đầu thử sức với một nhiệm vụ còn dang dở: biến \"nghịch lý thời gian\" trở nên có lý.  ... Đứng đầu bởi giáo sư EDWARD JOHNSTON, nhóm khảo cổ xuyên thời gian trở về thời Trung cổ. Một tai nạn buộc họ phải ở lại lâu hơn dự định. Một thời đại hùng tráng và tàn khốc - với những cuộc chiến đẫm máu liên miên, mang tới hai lựa chọn, một là chết, hai là sống sót để trở về hiện tại. Họ phải sống để tìm','1990-01-12','7YYWZJ3H.jpg'),(3,'Về nhà','32x12',1,1,1,123,'...','2023-05-01','C5FA2DHX.jpg'),(4,'Tâm hồn cao thượng','32x12',2,4,2,123,'...',NULL,'7QBCRMMF.jpg'),(5,'Học cách sẻ chia','32x12',2,4,1,324,'...','2023-05-01','GEIEZZ8K.jpg'),(6,'Chăm mẹ ốm mejt','32x12',2,4,1,324,'...','2023-05-04','GN3VCU28.jpg'),(8,'Hình như ta đã yêu nhau','32x12',2,5,2,NULL,'...','2023-04-11','98M79TTV.jpg'),(9,'Bàn luận về yêu','32x12',4,5,2,123,'...','2023-05-26','35I2XI5F.jpg'),(10,'Sức mạnh của người mẹ','16x18',1,1,1,123,'Một bức thông điệp cầu cứu 600 năm tuổi từ vị giáo sư sử học đại học Yale gửi cho các sinh viên của mình ở thời hiện tại. Trên sa mạc rộng lớn không một bóng người, một người đàn ông bỗng xuất hiện, không một phương tiện di chuyển. Giữa hai sự kiện kì lạ khác nhau nửa vòng trái đất, có một điểm chung khó ngờ, đó là trung tâm nghiên cứu công nghệ lượng tử ITC...  Với chủ đề đã làm say đắm khắp các khoa học gia lẫn tiểu thuyết gia viễn tưởng từ hồi các Thuyết Lượng tử và Tương đối ra đời, MICHAEL CRICHTON, cha đẻ của Công viên kỷ Jura và Thế giới nghịch, cưỡi lên Dòng thời gian để tiến vào một cuộc \"du hành thời gian\", bắt đầu thử sức với một nhiệm vụ còn dang dở: biến \"nghịch lý thời gian\" trở nên có lý.  ... Đứng đầu bởi giáo sư EDWARD JOHNSTON, nhóm khảo cổ xuyên thời gian trở về thời Trung cổ. Một tai nạn buộc họ phải ở lại lâu hơn dự định. Một thời đại hùng tráng và tàn khốc - với những cuộc chiến đẫm máu liên miên, mang tới hai lựa chọn, một là chết, hai là sống sót để trở về hiện tại. Họ phải sống để tìm','2010-11-12','NQK26Y4Y.jpg'),(11,'Chúc mẹ ngủ ngon','16x18',2,4,2,123,'...','2003-03-05','H2PQB7LZ.jpg'),(12,'Tội ác và hình phạt','16x18',2,4,2,123,'...','2003-03-05','UH8ZDY1I.jpg'),(13,'9 màu chia ly','16x18',2,4,2,123,'...','2003-03-05','O7J4WSKW.jpg'),(14,'Chó và mèo','16x18',1,4,1,123,'...','1990-01-12','TOKRFZFE.jpg'),(15,'Nhắn gửi một tôi người đã yêu em','16x18',2,4,1,123,'<p>sda</p>','2023-05-12','8BF9J45D.jpg'),(16,'Nhắn gửi tất cả các em','16x18',2,4,1,123,'<p>jhk</p>','2023-05-12','N6MDM5X4.png'),(17,'Dù được ban đôi cánh','16x18',1,1,1,123,'<p>.</p>','2023-06-04','4WBD9Q8Y.jpg'),(18,'Sống ngân khi tỏ khi mờ','16x18',1,1,1,123,NULL,'2023-05-10','KEJYZJBV.jpg'),(19,'Lặng yên cho nước chảy','32x15',1,1,1,123,'<p>...</p>','2023-05-28','IZL2U1O6.jpg'),(20,'Chuyện em yêu anh','16x18',1,5,1,123,'<p>...</p>','2023-05-19','UQY14LRY.jpg'),(21,'Nam và nữ','16x18',1,4,1,123,'<p>...</p>','2023-05-18','YU8GQND3.jpg'),(22,'Gương soi tội lỗi','16x18',1,4,1,123,'<p>...</p>','2023-05-20','guong_soi_toi_loi_-_bia1_00dc3b44b26144209ebe4ea5e28710b0_large.webp'),(23,'Gặp lại','16x18',3,4,1,123,'<p>...</p>','2023-05-18','GQKWGMO8.jpg'),(24,'Sinh vật học kì thú','16x18',1,5,1,123,'<p>...</p>','2023-05-12','PT9WXQU7.jpg'),(25,'Đại Nam vol 2','16x18',1,1,1,123,'<p>...</p>','2023-05-21','7YYWZJ3H.jpg'),(26,'Tâm hồn cao thượng vol 2','16x18',1,5,1,123,'<p>...</p>','2023-05-24','7QBCRMMF.jpg'),(27,'Về nhà vol 2','16x18',2,4,1,123,'<p>...</p>','2023-05-18','C5FA2DHX.jpg'),(28,'Đại nam vol 3','16x18',1,1,1,123,'<p>...</p>','2023-05-09','7YYWZJ3H.jpg'),(29,'Ngày xưa của con','23x12',1,1,1,123,'...','2002-02-08','OUBHBBZ2.jpg'),(31,'Khúc đắm say tuyệt vọng','12x23',2,4,2,123,'...','2001-07-05','NGQ7VG5G.jpg'),(32,'Dòng thời gian','23x15',3,5,3,245,'...','2005-12-08','JBKBGYH1.jpg'),(34,'Ký túc xá 307','32x15',NULL,4,2,234,'...','2023-09-16','C3F24YNQ.jpg'),(36,'Thương nhớ người','23x19',2,5,3,265,'...','2010-11-11','7YYWZJ3H.jpg'),(37,'Hình bóng nàng','23x12',2,1,2,231,'...','2002-01-09','GQKWGMO8.jpg'),(38,'Sinh vật học kì thú','23x19',2,11,4,234,'...','2023-10-28','H2PQB7LZ.jpg'),(39,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,'1','125000',3,14,3,1,'1','2023-12-21','7YYWZJ3H.jpg'),(46,'a','a',1,16,2,1,'<p><em>Hay</em></p>\n','2023-12-24','aaaa.jpg');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `sanpham_view`
--

DROP TABLE IF EXISTS `sanpham_view`;
/*!50001 DROP VIEW IF EXISTS `sanpham_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `sanpham_view` AS SELECT 
 1 AS `sanp_id`,
 1 AS `sanp_name`,
 1 AS `size`,
 1 AS `namsx`,
 1 AS `soTrang`,
 1 AS `gia`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `maTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `maNguoiDung` int(11) DEFAULT NULL,
  `taiKhoan` varchar(50) DEFAULT NULL,
  `matKhau` varchar(50) DEFAULT NULL,
  `ngayBatDau` date DEFAULT NULL,
  `ngayKetThuc` date DEFAULT NULL,
  `trangThai` varchar(50) DEFAULT NULL,
  `loaiQuyen` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`maTaiKhoan`),
  KEY `maNguoiDung` (`maNguoiDung`),
  CONSTRAINT `taikhoan_ibfk_1` FOREIGN KEY (`maNguoiDung`) REFERENCES `nguoidung` (`maNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,1,'luan@gmail.com','123456','2023-05-10','2023-05-10','1','admin'),(2,2,'luan2k2hy@gmail.com','150922','2023-05-10',NULL,'1','client'),(3,3,'anh@gmail.com','123456','2023-10-13',NULL,'1','client'),(4,4,'Vu@gmail.com','123456','2023-10-13',NULL,'1','client'),(5,5,'123456','123456','2023-10-20',NULL,'1','client');
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tg`
--

DROP TABLE IF EXISTS `tg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tg` (
  `tG_id` int(11) NOT NULL AUTO_INCREMENT,
  `tG_name` varchar(150) DEFAULT NULL,
  `tG_diaChi` varchar(500) DEFAULT NULL,
  `sdt` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`tG_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tg`
--

LOCK TABLES `tg` WRITE;
/*!40000 ALTER TABLE `tg` DISABLE KEYS */;
INSERT INTO `tg` VALUES (1,'Trần Văn Quan','103 Nguyễn Trung Ngạn, Hà Nội',971877014,'quoc@gmail.com'),(2,'Fujimato','Nhật Bản',987878786,'fuji@gmail.com'),(3,'sangji','Nhật Bản',987878786,'fuji@gmail.com'),(4,'Vũ Thiện Thuật','Hồ Chí Minh, Việt Nam',987656787,'thuat@gmail.com'),(5,'Sankos','Nhật Bản',987656787,'Sanko@gmail.com'),(6,'Landy','Mỹ',987656787,'Landy@gmail.com'),(7,'Author','Anh quốc',987656787,'Au@gmail.com'),(8,'Nguyễn Văn Quang','Phố 103, Cầu Giấy, Hà Nội',976787656,'quang@gmail.com'),(9,'Nguyễn Trung Ngạn','103, Cầu Giấy, Hà Nội',965920038,'Ngan@gmail.com');
/*!40000 ALTER TABLE `tg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Luan','luan2k2hy@gmail.com','2023-05-17 15:05:34','luan12345','asd','2023-05-09 15:37:14','2023-05-09 15:37:14'),(2,'luan','luan',NULL,'1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'quanlybansach'
--

--
-- Dumping routines for database 'quanlybansach'
--
/*!50003 DROP PROCEDURE IF EXISTS `addComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addComment`(sanp_id int, content varchar(1000), us_id int)
BEGIN
	insert into comment(sanp_id, content, user_id)
    values(sanp_id, content,us_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `addReplyComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addReplyComment`(id int, content varchar(500), id_us int)
BEGIN
	insert into replyComment(id_comment, content, id_us) values (id, content, id_us);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `authenticate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `authenticate`(us varchar(50), ps varchar(50))
BEGIN
	select taikhoan.maTaiKhoan, taikhoan.maNguoiDung, taikhoan.taiKhoan, taikhoan.loaiQuyen, nguoidung.hoTen, nguoidung.ngaySinh, nguoidung.gioiTinh, nguoidung.diaChi, nguoidung.email, nguoidung.sdt
    from taikhoan inner join nguoidung on taikhoan.maNguoiDung = nguoidung.maNguoiDung
    where taikhoan.taiKhoan = us and taikhoan.matKhau = ps;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ConfirmCt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ConfirmCt`(sanp_id int, soLuong int)
BEGIN
	DECLARE price int;
    declare id int;
    SELECT MAX(soHoaDon) into id FROM hoadonban;
	select giaca.gia into price from giaca where giaca.sanp_id = sanp_id;
	Insert into chitiethoadonban(soHoaDon, sanp_id, soLuong, giaBan) 
    values(id, sanp_id, soLuong, price);
    
    Update hoadonban
    set giaTien = hoadonban.giaTien + (soLuong*price)
    where hoadonban.soHoaDon = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `confirmOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `confirmOrder`(id int)
BEGIN
	update donhang
    set
    trangThaiThanhToan = 'Đã thanh toán'
    where donhang.maDonHang = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateDonHang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateDonHang`(
    IN khach VARCHAR(1000),
    IN listchitiet VARCHAR(1000)
)
BEGIN
    -- Thêm khách hàng nếu khách hàng không null
    IF khach IS NOT NULL THEN
        INSERT INTO khachhang
        (
            tenKhachHang,
            diaChi,
            email,
            sdt
        )
        VALUES
        (
            JSON_EXTRACT(khach, '$.tenKhachHang'),
            JSON_EXTRACT(khach, '$.diaChi'),
            JSON_EXTRACT(khach, '$.email'),
            JSON_EXTRACT(khach, '$.sdt')
        );
    END IF;

    -- Thêm đơn hàng
    INSERT INTO donhang
    (
        maKhachHang,
        ngayDat,
        trangThai
    )
    VALUES
    (
        LAST_INSERT_ID(),
        curdate(),
        1
    );

    -- Thêm chi tiết đơn hàng
    IF listchitiet IS NOT NULL THEN
        INSERT INTO chitietdonhang
        (
            maDonHang,
            sanp_id,
            soLuong,
            gia
        )
        SELECT LAST_INSERT_ID(), JSON_QUERY(listchitiet, '$[*].sanp_id') AS sanp_id,
       JSON_QUERY(listchitiet, '$[*].soLuong') AS soLuong,
       JSON_QUERY(listchitiet, '$[*].gia') AS gia
FROM listchitiet;
    END IF;

    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateHoaDonBan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateHoaDonBan`(maKhachHang int)
BEGIN
	Insert into hoadonban(ngayBan,maKhachHang) values(curdate(), maKhachHang);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateHoaDonNhap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateHoaDonNhap`(maNguoiDung int, nsx_id int)
BEGIN
	Insert into hoadonnhap(ngayNhap,maNguoiDung, nsx_id) values(curdate(), maNguoiDung, nsx_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateLoaiSp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateLoaiSp`(danhmuc_id int, name varchar(100))
BEGIN
	INSERT into loaisp(danhmuc_id, loai_name) VALUES (danhmuc_id, name);
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateNhasx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateNhasx`(nsx_name varchar(50), diaChi varchar(50), sdt int)
BEGIN
	insert into nhasx(nsx_name, diaChi, sdt) values(nsx_name, diaChi, sdt);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateSanpham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateSanpham`(sanp_name varchar(100), size varchar(50), tg_id int, loai_id int, nsx_id int, soTrang int, tomTat varchar(3000), namsx date, image varchar(1000), price int)
BEGIN
	Insert into sanpham (sanp_name, size, tg_id, loai_id, nsx_id, soTrang, tomTat, namsx, image) values
    (sanp_name, size, tg_id, loai_id, nsx_id, soTrang, tomTat, namsx, image);
    SET @id = LAST_INSERT_ID();
    
    Insert into giaca(sanp_id, ngayBatDau, gia) values(@id, CURDATE(), price);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreatetaiKhoan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreatetaiKhoan`(hoTen varchar(100), ngaySinh date, gioiTinh varchar(20), diaChi varchar(200), email varchar(100), sdt varchar(12),taiKhoan varchar(50), matKhau varchar(20))
BEGIN
	insert into nguoidung(hoTen, ngaySinh, gioiTinh, diaChi, email, sdt) values(hoTen, ngaySinh, gioiTinh, diaChi, email, sdt);
    SET @id = LAST_INSERT_ID();
    insert into taikhoan(maNguoiDung, taiKhoan, matKhau, ngayBatDau, trangThai, loaiQuyen)
    values (@id, taiKhoan, matKhau, CURDATE(),1, 'client');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateTg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateTg`(email varchar(50), sdt int, tG_diaChi varchar(150), tg_name varchar(100) )
BEGIN
INSERT INTO tg (email, sdt, tG_diaChi, tG_name) VALUES(email, sdt, tG_diachi, tG_name);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreteChiTietHoaDonBan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreteChiTietHoaDonBan`(soHoaDon int, sanp_id int, soLuong int)
BEGIN
	DECLARE price int;
	select giaca.gia into price from giaca where giaca.sanp_id = sanp_id;
	Insert into chitiethoadonban(soHoaDon, sanp_id, soLuong, giaBan) 
    values(soHoaDon, sanp_id, soLuong, price);
    
    Update hoadonban
    set giaTien = hoadonban.giaTien + (soLuong*price)
    where hoadonban.soHoaDon = soHoaDon;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreteChiTietHoaDonNhap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreteChiTietHoaDonNhap`(soHoaDon int, sanp_id int, soLuong int)
BEGIN
	DECLARE price int;
	select giaca.gia into price from giaca where giaca.sanp_id = sanp_id;
	Insert into chitiethoadonnhap(soHoaDon, sanp_id, soLuong, donGia) 
    values(soHoaDon, sanp_id, soLuong, price);
    update chitietkho set
     soLuong = chitietkho.soLuong + soLuong
     where chitietkho.sanp_id = sanp_id;
    
    
    Update hoadonnhap
    set giaTien = hoadonnhap.giaTien + (soLuong*price)
    where hoadonnhap.soHoaDon = soHoaDon;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteLoaiSp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteLoaiSp`(id int)
BEGIN
 DELETE from loaisp WHERE loaisp.loai_id = id;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteNhasx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteNhasx`(id int)
BEGIN
	delete from nhasx where nsx_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteSanpham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteSanpham`(id int)
BEGIN
	Delete from giaca where giaca.sanp_id = id;
    delete from sanpham where sanpham.sanp_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteTg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteTg`(id int)
BEGIN
	Delete from tg where tG_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllDonHang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllDonHang`(pageSize int, pageIndex int)
BEGIN
	Select donhang.maDonHang, donhang.trangThaiGiaoHang, donhang.ngayDat, donhang.trangThai, donhang.giaTien, donhang.trangThaiThanhToan, khachhang.tenKhachHang
    from donhang inner join khachhang on donhang.maKhachHang = khachhang.maKhachHang order by donhang.maDonHang desc limit pageSize offset pageIndex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllHoaDonBan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllHoaDonBan`(pageSize int, pageIndex int)
BEGIN
	select hoadonban.soHoaDon, hoadonban.giaTien, hoadonban.ngayBan, hoadonban.maKhachHang, khachhang.tenKhachHang
    from hoadonban inner join khachhang on hoadonban.maKhachHang = khachhang.maKhachHang order by  hoadonban.soHoaDon desc
    limit pageSize offset pageIndex ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllHoaDonNhap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllHoaDonNhap`(pageSize int, pageIndex int)
BEGIN
	select hoadonnhap.soHoaDon, hoadonnhap.giaTien, hoadonnhap.ngayNhap, hoadonnhap.maNguoiDung, nhasx.nsx_name, nguoidung.hoTen
    from hoadonnhap inner join nguoidung on hoadonnhap.maNguoiDung = nguoidung.maNguoiDung inner join nhasx on nhasx.nsx_id = hoadonnhap.nsx_id
    limit pageSize offset pageIndex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllNhasx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllNhasx`()
BEGIN
	select * from nhasx;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllSanpham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllSanpham`()
BEGIN
	Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id ORDER BY sanp_id ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllTg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllTg`()
BEGIN
SELECT * from tg;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetChiTietDonHang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetChiTietDonHang`(id int)
BEGIN
	select chitietdonhang.sanp_id, chitietdonhang.maDonHang, sanpham.sanp_name, chitietdonhang.soLuong, chitietdonhang.gia
    from chitietdonhang inner join sanpham on chitietdonhang.sanp_id = sanpham.sanp_id inner join donhang on donhang.maDonHang = chitietdonhang.maDonHang
    where donhang.maDonHang = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetChiTietHoaDonBan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetChiTietHoaDonBan`(id int)
BEGIN
	select chitiethoadonban. machitiethoadonban, chitiethoadonban.soLuong, chitiethoadonban.giaBan,
    sanpham.sanp_name, sanpham.image from chitiethoadonban inner join sanpham on sanpham.sanp_id = chitiethoadonban.sanp_id where chitiethoadonban.soHoaDon = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetChiTietHoaDonNhap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetChiTietHoaDonNhap`(id int)
BEGIN
	select chitiethoadonnhap. maChiTietHoaDonNhap, chitiethoadonnhap.soLuong, chitiethoadonnhap.donGia,
    sanpham.sanp_name, sanpham.image from chitiethoadonnhap inner join sanpham on sanpham.sanp_id = chitiethoadonnhap.sanp_id where chitiethoadonnhap.soHoaDon = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getComment`(id int)
BEGIN
	select comment.*, nguoidung.hoTen from comment inner join taikhoan on comment.user_id = taikhoan.maTaiKhoan
     inner join nguoidung on taikhoan.maNguoiDung = nguoidung.maNguoiDung where comment.sanp_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDanhMucAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDanhMucAll`()
BEGIN
SELECT * from danhmucs;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDanhMucData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDanhMucData`()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE id INT;
    DECLARE name VARCHAR(255);

    -- Declare a cursor for the SELECT statement
    DECLARE cur CURSOR FOR
        SELECT danhmuc_id, danhmuc_name
        FROM danhmucs;

    -- Declare continue handler to exit loop
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Open the cursor
    OPEN cur;

    -- Start fetching rows
    FETCH cur INTO id, name;

    -- Loop through the result set
    WHILE NOT done DO
        -- You can process the data here, or simply print it
        -- For example, you can use SELECT or PRINT statements
        -- to display the data
        SELECT id, name;

        -- Fetch the next row
        FETCH cur INTO id, name;
    END WHILE;

    -- Close the cursor
    CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDonHangById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDonHangById`(id int)
BEGIN
	Select donhang.maDonHang, khachhang.maKhachHang, donhang.ngayDat, donhang.trangThai, donhang.giaTien, donhang.trangThaiThanhToan, khachhang.tenKhachHang, khachhang.diaChi, khachhang.sdt,khachhang.email
    from donhang inner join khachhang on donhang.maKhachHang = khachhang.maKhachHang where donhang.maDonHang = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetHoaDonBanById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetHoaDonBanById`(id int)
BEGIN
	select hoadonban.* , khachhang.* from hoadonban inner join khachhang on hoadonban.maKhachHang = khachhang.maKhachHang where hoadonban.soHoaDon = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetKhoAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetKhoAll`()
BEGIN
	Select * from kho;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetKhoById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetKhoById`(id int,pageSize int, pageIndex int)
BEGIN
	select chitietkho.sanp_id, chitietkho.soLuong, sanpham.sanp_name, sanpham.image from chitietkho inner join kho
    on chitietkho.maKho = kho.maKho inner join sanpham on sanpham.sanp_id = chitietkho.sanp_id where kho.maKho = id limit pageSize offset pageIndex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLoaiSpById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetLoaiSpById`(id int)
BEGIN
SELECT * from loaisp WHERE loaisp.loai_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetNhasxById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetNhasxById`(id int)
BEGIN
	select * from nhasx where nsx_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getReplyComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getReplyComment`(id int)
BEGIN
	select * from replyComment where id_comment = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanphamById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanphamById`(id int)
BEGIN
	Select sanpham.sanp_id, sanpham.tg_id, sanpham.nsx_id, sanpham.loai_id, giaca.gia, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join giaca on sanpham.sanp_id=giaca.sanp_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id where sanpham.sanp_id = id ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanphamByLoai` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanphamByLoai`(id int)
BEGIN
	Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id where sanpham.loai_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanphamByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanphamByName`(ten varchar(100))
BEGIN
	Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id where sanpham.sanp_name LIKE CONCAT('%', ten, '%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanphamByNsx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanphamByNsx`(id int)
BEGIN
	Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id where sanpham.nsx_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanphamByTg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanphamByTg`(id int, sl int)
BEGIN
	Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id where sanpham.tg_id = id limit sl;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSanPhamDaTa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSanPhamDaTa`()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE id INT;
    DECLARE name VARCHAR(255);
    DECLARE kichThuoc varchar(50);
    DECLARE tacgia int;
    DECLARE loaisp int; DECLARE anh varchar(1000);
    DECLARE nhasx int; DECLARE ngaySx date;
    DECLARE pageSize varchar(50); DECLARE noiDung varchar(20000);

    -- Declare a cursor for the SELECT statement
    DECLARE cur CURSOR FOR
        SELECT sanp_id, sanp_name, size, tg_id, loai_id, nsx_id, soTrang, tomTat, namsx, image
        FROM sanpham;

    -- Declare continue handler to exit loop
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Open the cursor
    OPEN cur;

    -- Start fetching rows
    FETCH cur INTO id, name, kichThuoc, tacgia, loaisp, nhasx, pageSize, noiDung,
    ngaySx, anh;

    -- Loop through the result set
    WHILE NOT done DO
        -- You can process the data here, or simply print it
        -- For example, you can use SELECT or PRINT statements
        -- to display the data
        SELECT id, name, kichThuoc, tacgia, loaisp, nhasx, pageSize, noiDung,
    ngaySx, anh;

        -- Fetch the next row
        FETCH cur INTO id, name, kichThuoc, tacgia, loaisp, nhasx, pageSize, noiDung,
    ngaySx, anh;
    END WHILE;

    -- Close the cursor
    CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSpById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSpById`(id int)
BEGIN
	Select sanpham.sanp_id, giaca.gia, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx,
			sanpham.image, sanpham.loai_id, sanpham.nsx_id, sanpham.tG_id from sanpham
            inner join giaca on sanpham.sanp_id=giaca.sanp_id where sanpham.sanp_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTgById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTgById`(id int)
BEGIN
SELECT * from tg WHERE tg.tG_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTheLoaiAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTheLoaiAll`()
BEGIN
	SELECT * from loaisp;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_best_selling_product_of_day` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_best_selling_product_of_day`()
BEGIN

SELECT sanpham.sanp_id, sanpham.sanp_name, SUM(chitiethoadonban.soLuong) AS total_quantity
FROM sanpham inner join chitiethoadonban on sanpham.sanp_id = chitiethoadonban.sanp_id
inner join hoadonban on hoadonban.soHoaDon = chitiethoadonban.soHoaDon

WHERE hoadonban.ngayBan = CURDATE()
GROUP BY sanpham.sanp_id
ORDER BY total_quantity DESC
LIMIT 10;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_product_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_product_status`(
  IN id INT
)
BEGIN

 
  DECLARE `status` VARCHAR(255);
  DECLARE `quantity` INT;
  SELECT soLuong into quantity
  FROM chitietkho
  WHERE id = chitietkho.sanp_id;

  IF quantity < 30 THEN
    SET status = 'bán chạy';
  ELSE
    SET status = 'tồn kho';
  END IF;

  SELECT quantity, status;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeBanChay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeBanChay`(`SoLuong` INT)
BEGIN
	SELECT
    `chitiethoadonban`.`sanp_id`,
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`,
    SUM(`chitiethoadonban`.`SoLuong`) AS `SL`
  FROM `SanPham`
    INNER JOIN `chitiethoadonban` ON `chitiethoadonban`.`sanp_id` = `SanPham`.`sanp_id`
    INNER JOIN `GiaCa` ON `GiaCa`.`sanp_id` = `SanPham`.`sanp_id`
  GROUP BY
    `chitiethoadonban`.`sanp_id`,
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`
  ORDER BY `SL` DESC
  LIMIT `SoLuong`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeGetKhachHangBySdt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeGetKhachHangBySdt`(sdt int)
BEGIN
	Select khachhang.*, donhang.maDonHang from khachhang inner join donhang on khachhang.maKhachHang = donhang.maKhachHang where khachhang.sdt = sdt;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeGetMoi` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeGetMoi`(`SoLuong` INT)
BEGIN
	SELECT
    `chitiethoadonnhap`.`sanp_id`,
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`,
    hoadonnhap.ngayNhap
    
  FROM `SanPham` 
    INNER JOIN `chitiethoadonnhap` ON `chitiethoadonnhap`.`sanp_id` = `SanPham`.`sanp_id` inner join hoadonnhap on chitiethoadonnhap.soHoaDon = hoadonnhap.soHoaDon
    INNER JOIN `GiaCa` ON `GiaCa`.`sanp_id` = `SanPham`.`sanp_id` 
  GROUP BY
      `chitiethoadonnhap`.`sanp_id`,
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`,
    hoadonnhap.ngayNhap
  ORDER BY hoadonnhap.ngayNhap DESC
  LIMIT `SoLuong`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeGetSanPham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeGetSanPham`(pageSize int, pageIndex int)
BEGIN
Select sanpham.sanp_id, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id ORDER BY sanp_id ASC limit pageSize offset pageIndex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeGetSanPhamByLoai` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeGetSanPhamByLoai`(id int, sl int)
BEGIN
	SELECT
   
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`
   
  FROM `SanPham`
    INNER JOIN `GiaCa` ON `GiaCa`.`sanp_id` = `SanPham`.`sanp_id` 
    where SanPham.loai_id = id
  GROUP BY
  
    `Sanpham`.`sanp_name`,
    `Sanpham`.`Size`,
    `Sanpham`.`TG_id`,
    `Sanpham`.`loai_id`,
    `Sanpham`.`nsx_id`,
    `Sanpham`.`sotrang`,
    `Sanpham`.`tomtat`,
    `Sanpham`.`namsx`,
    `Sanpham`.`Image`,
    `GiaCa`.`Gia`
  LIMIT `sl`;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `HomeOrderSearch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `HomeOrderSearch`(sdt int)
BEGIN
	Select donhang.trangThai, donhang.maDonHang, 
    donhang.giaTien, chitietdonhang.maChiTietDonHang, chitietdonhang.soLuong, chitietdonhang.gia,
    sanpham.sanp_name, sanpham.image from donhang inner join khachhang on donhang.maKhachHang = khachhang.maKhachHang inner join
    chitietdonhang on donhang.maDonHang = chitietdonhang.maDonHang inner join sanpham on chitietdonhang.sanp_id = sanpham.sanp_id
    where khachhang.sdt = sdt;
    
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `KiemTraKho` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `KiemTraKho`(id int)
BEGIN
	select sanpham.sanp_name, chitietkho.soLuong from sanpham inner join chitietkho
    on sanpham.sanp_id = chitietkho.sanp_id where sanpham.sanp_id = id;
    if chiietkho.soLuong < 10 then
    select 'Hàng tồn kho';
    else
    select("Nhiều");
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `myOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `myOrder`(phoneNumber varchar(15))
BEGIN
	Select donhang.maDonHang, donhang.trangThai, donhang.trangThaiGiaoHang, donhang.trangThaiThanhToan, khachhang.sdt, chitietdonhang.maChiTietDonHang, chitietdonhang.soLuong, chitietdonhang.gia,
    sanpham.sanp_name, sanpham.image from donhang inner join khachhang on donhang.maKhachHang = khachhang.maKhachHang inner join
    chitietdonhang on donhang.maDonHang = chitietdonhang.maDonHang inner join sanpham on chitietdonhang.sanp_id = sanpham.sanp_id
    where khachhang.sdt = phoneNumber;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `NewProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `NewProducts`(sl int)
BEGIN
Select  sanpham.sanp_id, hoadonnhap.ngayNhap, sanpham.sanp_name, sanpham.size, sanpham.soTrang, sanpham.tomTat, sanpham.namsx, giaca.gia,
			sanpham.image, loaisp.loai_name, nhasx.nsx_name, tg.tG_name from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id inner join chitiethoadonnhap on chitiethoadonnhap.sanp_id = sanpham.sanp_id
            inner join hoadonnhap on hoadonnhap.soHoaDon = chitiethoadonnhap.soHoaDon 
            Group by sanpham.sanp_id ORDER BY hoadonnhap.ngayNhap Desc limit sl;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searchLoaiSp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `searchLoaiSp`(IN `name` VARCHAR(50))
SELECT *
    FROM loaisp
    WHERE loaisp.loai_name LIKE CONCAT('%', name, '%') ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searchTacGia` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `searchTacGia`(name varchar(50))
BEGIN
 select * from tg where tG_name like concat('%', name, '%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searcNhasx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `searcNhasx`(name varchar(50))
BEGIN
select * from nhasx where nsx_name like concat('%', name, '%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_addDanhmuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_addDanhmuc`(IN id INT, IN name varchar(50))
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    -- Xử lý lỗi SQL Exception ở đây
    ROLLBACK;
    SELECT 'Error: SQL Exception occurred' AS message;
  END;

  -- Bắt đầu giao dịch
  START TRANSACTION;

  -- Thực hiện các câu lệnh SQL
  INSERT INTO danhmucs (danhmuc_id, danhmuc_name) VALUES (id, name);

  -- Kết thúc giao dịch
  COMMIT;

  -- Xử lý thành công
  SELECT 'Success: Procedure executed successfully' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_donhang_create` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_donhang_create`(
  IN khach JSON,
  IN listchitiet JSON
)
BEGIN
  IF khach IS NOT NULL THEN
    INSERT INTO khachhang (
      tenKhachHang,
      diaChi,
      email,
      sdt
    ) VALUES (
      JSON_EXTRACT(khach, '$.tenKhachHang'),
      JSON_EXTRACT(khach, '$.diaChi'),
      JSON_EXTRACT(khach, '$.email'),
      JSON_EXTRACT(khach, '$.sdt')
    );
  END IF;

  
    INSERT INTO donhang (
      maKhachHang,
      ngayDat,
      trangThai
    ) VALUES (
      LAST_INSERT_ID(),
      curdate(),
      1
    );

    -- Thêm bảng chi tiết đơn hàng
    INSERT INTO chitietdonhang (
      maDonHang,
      sanp_id,
      soLuong,
      gia
    ) 
    SELECT
      LAST_INSERT_ID(),
      JSON_EXTRACT(value, '$.sanp_id'),
      JSON_EXTRACT(value, '$.soLuong'),
      JSON_EXTRACT(value, '$.gia')
    FROM listchitiet;
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeDoanhThuHomNay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeDoanhThuHomNay`()
BEGIN
	Select Sum(giaTien) as total from hoadonban where ngayBan = curdate();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeDoanhThuTrongThang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeDoanhThuTrongThang`()
BEGIN
	SELECT SUM(giaTien) AS tong_sotien
FROM hoadonban
WHERE MONTH(ngayBan) = MONTH(CURDATE()) AND YEAR(ngayBan) = YEAR(CURDATE());

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeDoanhThuTrongTuan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeDoanhThuTrongTuan`()
BEGIN
	SELECT SUM(giaTien) AS tong_sotien
FROM hoadonban
WHERE ngayBan BETWEEN CURDATE() - INTERVAL WEEKDAY(CURDATE()) DAY AND CURDATE() + INTERVAL 6 - WEEKDAY(CURDATE()) DAY;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeSanPhamHethang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeSanPhamHethang`()
BEGIN
	Select count(sanp_id) as sl from chitietkho where soLuong = 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeSoDonHang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeSoDonHang`()
BEGIN
	Select Count(*) as SoLuong from donhang;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKESoDonHangHomNay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKESoDonHangHomNay`()
BEGIN
	Select count(*) as sl from donhang where ngayDat = curdate();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeSoDonHangTrongThang` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeSoDonHangTrongThang`()
BEGIN
	SELECT Count(*) AS tong_donhang
FROM donhang
WHERE MONTH(ngayDat) = MONTH(CURDATE()) AND YEAR(ngayDat) = YEAR(CURDATE());

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeSoDonHangTrongTuan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeSoDonHangTrongTuan`()
BEGIN
SELECT Count(*) AS tong_donhang
FROM donhang
WHERE ngayDat BETWEEN CURDATE() - INTERVAL WEEKDAY(CURDATE()) DAY AND CURDATE() + INTERVAL 6 - WEEKDAY(CURDATE()) DAY;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeSonDonHangHomNay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeSonDonHangHomNay`()
BEGIN
	Select Count(*) from donhang where ngayDat = curdate();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeTongSanPham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeTongSanPham`()
BEGIN
	select Count(*) as soluong from sanpham;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ThongKeTongSoTienBan` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ThongKeTongSoTienBan`()
BEGIN
	Select Sum(giaTien) as total from hoadonban;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `timKiemNhaSx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `timKiemNhaSx`(ten varchar(100))
BEGIN
	select * from nhasx where nhasx.nsx_name like CONCAT('%', ten, '%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateDelivery` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateDelivery`(id int, st int)
BEGIN
 IF st = 3 THEN
        UPDATE donhang
        SET trangThaiGiaoHang = 'Giao hàng thành công'
        WHERE maDonHang = id;
    ELSEIF st = 2 THEN
        UPDATE donhang
        SET trangThaiGiaoHang = 'Giao hàng không thành công'
        WHERE maDonHang = id;
	ELSEIF st = 1 THEN
        UPDATE donhang
        SET trangThaiGiaoHang = 'Đang giao hàng'
        WHERE maDonHang = id;
	ELSEIF st = 0 THEN
        UPDATE donhang
        SET trangThaiGiaoHang = 'Chưa giao hàng'
        WHERE maDonHang = id;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateLoaiSp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateLoaiSp`(IN `loai_id` INT, IN `danhmuc_id` INT, IN `loai_name` VARCHAR(100))
BEGIN
	UPDATE `loaisp` SET `loai_name` = loai_name, danhmuc_id = danhmuc_id WHERE `loaisp`.`loai_id` = loai_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateNhasx` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateNhasx`(nsx_id int, nsx_name varchar(50), diaChi varchar(50), sdt varchar(11))
BEGIN
	update nhasx
    set nsx_name = nsx_name,
    diaChi = diaChi,
    sdt = sdt
    where nhasx.nsx_id = nsx_id;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateOrderStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateOrderStatus`(id int)
BEGIN
	Update donhang
    set trangThai = 'Đã xác nhận'
    where donhang.maDonHang = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateQuantity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateQuantity`(id int, sl int)
BEGIN
	update chitietkho
    set
    soLuong = chitietkho.soLuong - sl
    where chitietkho.sanp_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateSanpham` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateSanpham`(sanp_id int,sanp_name varchar(100), size varchar(50), tg_id int, loai_id int, nsx_id int, soTrang int, tomTat varchar(3000), namsx date, image varchar(1000), price int)
BEGIN
	Update sanpham
    set 
    sanp_name = sanp_name,
    size = size,
    tg_id = tg_id,
    loai_id = loai_id, 
    nsx_id = nsx_id,
    soTrang = soTrang,
    tomTat = tomTat,
    namsx = namsx,
    image = image
    where sanpham.sanp_id = sanp_id;
    update giaca
    set
    gia = price,
    ngayBatDau = curdate()
    where giaca.sanp_id = sanp_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateTg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateTg`(tG_id int, tG_name varchar(50), tG_diaChi varchar(50), sdt varchar(11), email varchar(50))
BEGIN
	update tg
    set tG_name = tG_name,
    tG_diaChi = tG_diaChi,
    sdt = sdt,
    email = email
    where tg.tG_id = tG_id;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `danhmuc_list`
--

/*!50001 DROP VIEW IF EXISTS `danhmuc_list`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `danhmuc_list` AS select `danhmucs`.`danhmuc_id` AS `danhmuc_id`,`danhmucs`.`danhmuc_name` AS `danhmuc_name` from `danhmucs` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `sanpham_view`
--

/*!50001 DROP VIEW IF EXISTS `sanpham_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `sanpham_view` AS select `sp`.`sanp_id` AS `sanp_id`,`sp`.`sanp_name` AS `sanp_name`,`sp`.`size` AS `size`,`sp`.`namsx` AS `namsx`,`sp`.`soTrang` AS `soTrang`,`g`.`gia` AS `gia` from (`sanpham` `sp` join `giaca` `g` on(`sp`.`sanp_id` = `g`.`sanp_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-30  1:42:36
