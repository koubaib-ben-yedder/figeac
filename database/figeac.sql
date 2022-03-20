-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2021 at 10:44 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6
USE figeac;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `figeac`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_id` varchar(4) NOT NULL,
  `Admin_first_name` varchar(200) NOT NULL,
  `Admin_last_name` varchar(200) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `hist` int(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `Secter` varchar(200) NOT NULL,
  `day`varchar(200) NOT NULL,
  `id` varchar(200) NOT NULL,
  `month`  varchar(200) NOT NULL,
  `year`   varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `Secter_name` varchar(200) NOT NULL
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pc`
--

CREATE TABLE `pc` (
  `Pc_id` int(5) NOT NULL,
  `Pc_name` varchar(200) NOT NULL,
  `day` int(4) DEFAULT NULL,
  `month` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `Secter` int(4) NOT NULL,
  `Pc_image` varchar(200) NOT NULL,
  `Secter_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `secter`
--

CREATE TABLE `secter` (
  `Secter_id` varchar(4) NOT NULL,
  `Secter_name` varchar(200) NOT NULL,
  `admin` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`hist`);

--
-- Indexes for table `pc`
--
ALTER TABLE `pc`
  ADD PRIMARY KEY (`Pc_id`);

--
-- Indexes for table `secter`
--
ALTER TABLE `secter`
  ADD PRIMARY KEY (`Secter_id`),
  ADD KEY `admin` (`admin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `hist` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `secter`
--
ALTER TABLE `secter`
  ADD CONSTRAINT `secter_ibfk_1` FOREIGN KEY (`admin`) REFERENCES `admin` (`Admin_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
