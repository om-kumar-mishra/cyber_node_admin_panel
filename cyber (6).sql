-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2023 at 11:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cyber`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `who_image` varchar(255) DEFAULT NULL,
  `who_description` text DEFAULT NULL,
  `mission_description` text DEFAULT NULL,
  `vision_description` text DEFAULT NULL,
  `v_m_image` varchar(255) DEFAULT NULL,
  `v_m_title` varchar(255) DEFAULT NULL,
  `v_m_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `who_image`, `who_description`, `mission_description`, `vision_description`, `v_m_image`, `v_m_title`, `v_m_description`, `createdAt`, `updatedAt`) VALUES
(2, 'who_image-1686919085487-215627625-client1.jpg', '', 'ewrewr', 'werewr', 'v_m_image-1686919085496-849896174-client2.jpg', 'dserw', '<p>werewr</p>\r\n', '2023-06-16 12:38:05', '2023-06-16 12:38:05');

-- --------------------------------------------------------

--
-- Table structure for table `bannercontents`
--

CREATE TABLE `bannercontents` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bannercontents`
--

INSERT INTO `bannercontents` (`id`, `type`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Privacy', '<p><em>ASFESFWFWSFWE</em></p>\r\n', '2023-02-01 05:25:02', '2023-02-01 05:25:02'),
(4, 'Privacy', '<p>sdf</p>\r\n', '2023-02-07 04:33:46', '2023-02-13 06:38:45');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image`, `title`, `sub_title`, `details`, `createdAt`, `updatedAt`) VALUES
(1, 'image-1688387116858-165122588-Alice\'s Adventures in Wonderland - Lewis Carroll.epub', 'fsdfef dgr', 'rthd   A            ', '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n', '2023-01-31 12:23:10', '2023-07-03 12:25:16'),
(2, 'Best Cricket Blogs Websites.jpg', 'hsrt', 'erth ', '<p><strong>hrehtrth</strong></p>\r\n', '2023-01-31 12:23:45', '2023-02-08 12:02:06'),
(5, 'download.jpg', 'ad  ', 'asd  ', '<p>asdasda</p>\r\n', '2023-02-07 04:27:51', '2023-02-13 13:04:27');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'wqdq', 'Best Cricket Blogs Websites.jpg', '<p><s>asAS</s></p>\r\n', '2023-02-03 07:25:55', '2023-02-10 05:00:37'),
(5, 'wdeqw', 'background_image.webp', '<p>adweadwe</p>\r\n', '2023-02-13 06:58:52', '2023-02-13 06:58:52');

-- --------------------------------------------------------

--
-- Table structure for table `blog_main_titledescs`
--

CREATE TABLE `blog_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_main_titledescs`
--

INSERT INTO `blog_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(4, 'ergrt ere', 'rty4t', '2023-06-16 07:05:27', '2023-06-16 07:05:33');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(3, 'afsef wqdswq', '2023-02-08 11:27:47', '2023-02-13 05:14:58'),
(4, 'dqwedqw', '2023-02-08 11:27:55', '2023-02-08 11:27:55');

-- --------------------------------------------------------

--
-- Table structure for table `career_infos`
--

CREATE TABLE `career_infos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `qulification` varchar(255) DEFAULT NULL,
  `upload_resume` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career_infos`
--

INSERT INTO `career_infos` (`id`, `name`, `phone`, `address`, `qulification`, `upload_resume`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'om kumar mishra', NULL, 'alobha h-106', 'MCA', 'image-1686988886517-610847735-blog1.jpg', 'omkrmishra123@gmail.com', '2023-06-17 08:01:26', '2023-06-17 08:01:26'),
(2, 'om kumar mishra', NULL, 'alobha h-106', 'MCA', NULL, 'omkrmishra123@gmail.com', '2023-06-17 08:04:32', '2023-06-17 08:04:32'),
(3, 'om kumar mishra', '7035054285', 'faridabadfewr', 'mca passout', NULL, 'omkrmishra123@gmail.com', '2023-06-19 10:22:12', '2023-06-19 10:22:12'),
(4, 'om kumar mishra', '7035054289', 'faridabadfewr', 'mca passout', NULL, 'omkrmishra123@gmail.com', '2023-06-19 10:26:53', '2023-06-19 10:26:53'),
(5, 'om kumar mishra', '7035654289', 'faridabad33444', 'mca passout', 'C:\\fakepath\\product-jpeg-500x500.webp', 'omkrmishra123@gmail.com', '2023-06-19 11:02:12', '2023-06-19 11:02:12'),
(6, 'om kumar mishr', '5555555555', 'faridabad33444', 'mca passout', 'C:\\fakepath\\bank.png', 'omkrrmishra123@gmail.com', '2023-06-19 11:40:42', '2023-06-19 11:40:42'),
(7, 'om kumar mishra', '5555555555', 'faridabad33444', 'mca passout', 'C:\\fakepath\\solution-img6.jpg', 'omkrmishra123@gmail.com', '2023-06-19 11:46:01', '2023-06-19 11:46:01'),
(8, 'happy customer ', '7035654289', 'faridabad3', 'mca passout', 'C:\\fakepath\\blog1.jpg', 'omkrrmishra123@gmail.com', '2023-06-19 11:55:38', '2023-06-19 11:55:38'),
(9, 'om kumar mishra', '7035654289', 'faridabad33444', 'mca passout', 'C:\\fakepath\\solution-img6.jpg', 'omkumar.alobha@gmail.com', '2023-06-19 12:00:59', '2023-06-19 12:00:59'),
(10, 'om kumar mishra', '7035654289', 'faridabadfewr', 'mca passout', 'C:\\fakepath\\product-jpeg-500x500.webp', 'omkrmishra4123@gmail.com', '2023-06-19 12:11:59', '2023-06-19 12:11:59'),
(11, 'om kumar mishra', '7035654289', 'faridabad33444', 'mca passout', 'C:\\fakepath\\choose-1.jpg', 'omkumar.alobha@gmail.com', '2023-06-19 12:12:59', '2023-06-19 12:12:59'),
(12, 'happy customer ', '7035054285', 'faridabadfewr', 'mca passout', 'blog2.jpg', 'ekta@gmail.com', '2023-06-19 12:16:36', '2023-06-19 12:16:36'),
(13, 'happy customer ', '7035654289', 'faridabad33444', 'mca passout', 'product-jpeg-500x500.webp', 'omkumar.alobha@gmail.com', '2023-06-19 12:20:29', '2023-06-19 12:20:29'),
(14, 'om kumar mishra', '7035654289', 'faridabad33444', 'mca passout', 'blog1.jpg', 'omkrmishra4123@gmail.com', '2023-06-19 12:21:59', '2023-06-19 12:21:59'),
(15, 'om kumar mishra', '7035054289', 'faridabadfewr', 'mca passout', 'choose-1.jpg', 'omkrmishra123@gmail.com', '2023-06-21 10:20:56', '2023-06-21 10:20:56'),
(16, 'Edit Category 1', '7035054289', 'faridabadfewr', 'mca passout', 'choose-1.jpg', 'om@gmail.com', '2023-06-21 10:41:50', '2023-06-21 10:41:50'),
(17, 'om kumar mishra', '7035054287', 'faridabad33444', 'mca passout', 'image-1687435104302-938944150-solution-img5.jpg', 'omkrmishra123@gmail.com', '2023-06-22 11:58:24', '2023-06-22 11:58:24'),
(18, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687435874639-600240466-solution-img6.jpg', 'omkrmishra123@gmail.com', '2023-06-22 12:11:14', '2023-06-22 12:11:14'),
(19, 'om kumar mishra', '7035054289', 'faridabad33444', 'mca passout', 'image-1687501648563-415429485-choose-1.jpg', 'omkrmishra123@gmail.com', '2023-06-23 06:27:28', '2023-06-23 06:27:28'),
(20, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687776713076-912217481-solution-img5.jpg', 'omkrmishra123@gmail.com', '2023-06-26 10:51:53', '2023-06-26 10:51:53'),
(21, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687776761358-360082979-home1-banner.jpg', 'omkrmishra123@gmail.com', '2023-06-26 10:52:41', '2023-06-26 10:52:41'),
(22, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687776854853-685650242-solution-img6.jpg', 'omkrmishra123@gmail.com', '2023-06-26 10:54:14', '2023-06-26 10:54:14'),
(23, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687776948783-578999448-solution-img5.jpg', 'omkrmishra123@gmail.com', '2023-06-26 10:55:48', '2023-06-26 10:55:48'),
(24, 'om kumar mishra', '7035054289', 'faridabad', 'mca', 'image-1687946938499-898265931-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.cfe', '2023-06-28 10:08:58', '2023-06-28 10:08:58'),
(25, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687947160903-3455157-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.co', '2023-06-28 10:12:40', '2023-06-28 10:12:40'),
(26, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687947294781-976202559-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-06-28 10:14:54', '2023-06-28 10:14:54'),
(27, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1687948470194-426627097-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-06-28 10:34:30', '2023-06-28 10:34:30'),
(28, 'Edit Category 14334', '7035054289', 'faridabad', 'mca passout', 'image-1687948514912-744798935-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-06-28 10:35:14', '2023-06-28 10:35:14'),
(29, 'om kumar mishra', '7035054289', 'faridabad33444', 'mca passout', 'image-1688272331879-765432007-resume (12).pdf', 'omkrmishra123@gmail.com', '2023-07-02 04:32:11', '2023-07-02 04:32:11'),
(30, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688272532507-62865811-resume (12).pdf', 'omkumar.alobha@gmail.com', '2023-07-02 04:35:32', '2023-07-02 04:35:32'),
(31, 'om kumar mishra', '7035054289', 'faridabad33444', 'mca passout', 'image-1688272685119-287350654-resume (12).pdf', 'omkrmishra123@gmail.com', '2023-07-02 04:38:05', '2023-07-02 04:38:05'),
(32, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688273113092-734808312-resume (12).pdf', 'omkumar.alobha@gmail.com', '2023-07-02 04:45:13', '2023-07-02 04:45:13'),
(33, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688273331391-112611986-resume (12).pdf', 'omkrmishra123@gmail.com', '2023-07-02 04:48:51', '2023-07-02 04:48:51'),
(34, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688474545388-348710474-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-04 12:42:25', '2023-07-04 12:42:25'),
(35, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688474621483-46647329-RAJ KUMAR MISHRA.pdf', 'om@gmail.com', '2023-07-04 12:43:41', '2023-07-04 12:43:41'),
(36, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688474927904-321163993-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-04 12:48:47', '2023-07-04 12:48:47'),
(37, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688475001101-287734339-resume (12).pdf', 'omkrmishra123@gmail.com', '2023-07-04 12:50:01', '2023-07-04 12:50:01'),
(38, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688475120772-107729912-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-04 12:52:00', '2023-07-04 12:52:00'),
(39, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688475413349-37098689-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-04 12:56:53', '2023-07-04 12:56:53'),
(40, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688475689263-970753302-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-04 13:01:29', '2023-07-04 13:01:29'),
(41, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688537413035-210048050-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-05 06:10:13', '2023-07-05 06:10:13'),
(42, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688537576433-766536320-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-05 06:12:56', '2023-07-05 06:12:56'),
(43, 'om kumar mishra', '7035054289', 'faridabad', 'mca passout', 'image-1688537962448-120221607-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-05 06:19:22', '2023-07-05 06:19:22'),
(44, 'om kumar mishra', '7035054289', 'faridabad33444', 'mca passout', 'image-1688548694780-33028520-RAJ KUMAR MISHRA.pdf', 'omkrmishra123@gmail.com', '2023-07-05 09:18:14', '2023-07-05 09:18:14'),
(45, 'om kumar mishra', '7035054287', 'faridabad', 'mca passout', 'image-1688549180535-604524514-Return Policy CARVITO (1).docx', 'omkrmishra123@gmail.com', '2023-07-05 09:26:20', '2023-07-05 09:26:20'),
(46, 'om kumar mishra', '7035054289', 'faridabad33444', 'mca passout', 'image-1688549206848-514604161-Privacy Policy Carvito.docx', 'omkrmishra123@gmail.com', '2023-07-05 09:26:46', '2023-07-05 09:26:46');

-- --------------------------------------------------------

--
-- Table structure for table `career_main_titledescs`
--

CREATE TABLE `career_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comman_banners`
--

CREATE TABLE `comman_banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comman_banners`
--

INSERT INTO `comman_banners` (`id`, `image`, `title`, `createdAt`, `updatedAt`) VALUES
(2, 'image-1686900048530-270772894-client2.jpg', NULL, '2023-06-16 07:20:48', '2023-06-16 07:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedIn` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `conatct_email` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `address`, `email`, `phone`, `fax`, `facebook`, `instagram`, `linkedIn`, `twitter`, `createdAt`, `updatedAt`, `conatct_email`, `summary`) VALUES
(11, 'faridabadfewr', 'omkrm45456ishra123@gmail.com', '7035054256', '4444444444', 'https://cyberdev.alobhaitsolution.com/about/', 'https://cyberdev.alobhaitsolution.com/about/', 'https://cyberdev.alobhaitsolution.com/about/', 'https://cyberdev.alobhaitsolution.com/about/', '2023-05-30 07:24:17', '2023-06-20 05:06:07', NULL, '<p>4Admin@123Admin@123Admin@123Admin@123Admin@123Admin@123</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `phone`, `subject`, `message`, `createdAt`, `updatedAt`) VALUES
(20, 'om kumar', 'omkumar.alobha@gmail.com', '7265154287', 'agdfywrwdywerwergu', '=========werwrwerewrewrwerwerew', '2023-04-24 07:05:42', '2023-04-24 07:05:42'),
(21, 'om', 'omkumaralobha@gmail.com', '7065054282', 'test', 'gggggggggggggggggggggggggggggggggggggggg', '2023-05-31 06:13:26', '2023-05-31 06:13:26'),
(22, 'om', 'omkumaralob2ha@gmail.com', '7065054286', 'test', 'gggggggggggggggggggggggggggggggggggggggg', '2023-05-31 06:13:55', '2023-05-31 06:13:55'),
(23, 'om', 'omkumaral4obha@gmail.com', '7065054283', 'test', 'gggggggggggggggggggggggggggggggggggggggg', '2023-05-31 07:04:10', '2023-05-31 07:04:10'),
(24, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'errordfgadr', 'rrgefsfaerwerwar', '2023-06-28 11:12:18', '2023-06-28 11:12:18'),
(25, 'om kumar mishrakkkkkkkkk', 'omkrmishra1f23@gmail.com', '7035054285', 'werfrewq', 'fdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', '2023-06-28 11:13:49', '2023-06-28 11:13:49'),
(26, 'om kumar mishra43', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'wfsfsd', '2023-06-28 11:19:26', '2023-06-28 11:19:26');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(2, 'aww', '<p><strong>w</strong></p>\r\n', '2023-02-07 07:02:55', '2023-02-07 07:41:24'),
(4, 'aww fsf', '<p>esefe</p>\r\n', '2023-02-07 07:39:57', '2023-02-13 07:41:10');

-- --------------------------------------------------------

--
-- Table structure for table `faq_contacts`
--

CREATE TABLE `faq_contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq_contacts`
--

INSERT INTO `faq_contacts` (`id`, `name`, `email`, `phone`, `subject`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'erew', 'de6sdefdsdfms@gmail.com', '7065054525043556', 'asf', 'wrwehfywerywfedtewdfd', '2023-02-09 09:55:42', '2023-02-09 09:55:42'),
(7, 'erew', 'de6sddefdsdfms@gmail.com', '7065054249', 'asf', 'wrwehfywerywfedtewdfd', '2023-02-09 11:14:38', '2023-02-09 11:14:38'),
(11, 'etew', 'kaustubh.alobha@gmail.com', '7265154286', 'agdfywrwdywerwergu', 'message from kaustubh', '2023-04-24 06:56:49', '2023-04-24 06:56:49'),
(12, 'om kumar msihra', 'omkumar.alobha@gmail.com', '7265154286', 'agdfywrwdywerwergu', 'message from kaustubh', '2023-04-24 06:59:30', '2023-04-24 06:59:30'),
(13, 'Edit Category ', 'omkrmishra4123@gmail.com', '7035054289', 'werfrewq', 'errtrtertye', '2023-06-28 11:04:14', '2023-06-28 11:04:14'),
(14, 'happy customer eeeeeeeeeeeeee', 'omkrmishra4123@gmail.com', '7035654289', 'werfrewq', 'gergreeeeeeeeeeeeeeeeeeeeeeeeee', '2023-06-28 11:08:14', '2023-06-28 11:08:14'),
(15, 'om kumar mishra2', 'ekta@gmail.com', '7035654289', '56y3566', 'xdsfsferwr', '2023-06-28 11:23:14', '2023-06-28 11:23:14'),
(16, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'awerwerwrew', '2023-07-01 07:15:34', '2023-07-01 07:15:34'),
(17, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'awerwerwrew', '2023-07-01 07:15:40', '2023-07-01 07:15:40'),
(18, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'awerwerwrew', '2023-07-01 07:15:44', '2023-07-01 07:15:44'),
(19, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'awerwerwrew', '2023-07-01 07:16:21', '2023-07-01 07:16:21'),
(20, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'awerwerwrew', '2023-07-01 07:16:23', '2023-07-01 07:16:23'),
(21, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:16:48', '2023-07-01 07:16:48'),
(22, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:05', '2023-07-01 07:20:05'),
(23, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:12', '2023-07-01 07:20:12'),
(24, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:13', '2023-07-01 07:20:13'),
(25, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:28', '2023-07-01 07:20:28'),
(26, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:28', '2023-07-01 07:20:28'),
(27, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(28, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(29, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(30, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(31, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(32, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(33, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:34', '2023-07-01 07:20:34'),
(34, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:35', '2023-07-01 07:20:35'),
(35, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:20:36', '2023-07-01 07:20:36'),
(36, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:21:08', '2023-07-01 07:21:08'),
(37, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:21:11', '2023-07-01 07:21:11'),
(38, 'om kumar mishra', 'omkrmishra123@gmail.com', '6464675765', 'error', 'qwrwruiwtre6ywqudy', '2023-07-01 07:21:56', '2023-07-01 07:21:56'),
(39, 'Edit Category 1', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'vuyewrf8ewtyfioqwi', '2023-07-01 07:22:22', '2023-07-01 07:22:22'),
(40, 'Edit Category 1', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'vuyewrf8ewtyfioqwi', '2023-07-01 07:28:15', '2023-07-01 07:28:15'),
(41, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'serew', '2023-07-01 07:31:00', '2023-07-01 07:31:00'),
(42, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'dyteegtryhyuyh', '2023-07-01 07:32:06', '2023-07-01 07:32:06'),
(43, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'adwutidt7weru', '2023-07-02 03:56:38', '2023-07-02 03:56:38'),
(44, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'rdgddgdteyttf', '2023-07-02 03:57:20', '2023-07-02 03:57:20'),
(45, 'om kumar mishra', 'omkumar.alobha@gmail.com', '7035054289', 'dytfdwfeqwdqew', 'jhfdhtadfujdfuwt', '2023-07-02 04:06:50', '2023-07-02 04:06:50'),
(46, 'om kumar mishra', 'omkumar.alobha@gmail.com', '7035054289', 'werfrewq', 'werwjhrtw67e6tr7ewr7weyttttttttttttttttttttttttttttttttttttttt', '2023-07-02 04:09:12', '2023-07-02 04:09:12'),
(47, 'om kumar mishra', 'omkrmishra123@gmail.com', '7035054289', 'werfrewq', 'dtdtdtyererws', '2023-07-02 04:12:52', '2023-07-02 04:12:52');

-- --------------------------------------------------------

--
-- Table structure for table `industry_details`
--

CREATE TABLE `industry_details` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description2` text DEFAULT NULL,
  `image2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_details`
--

INSERT INTO `industry_details` (`id`, `icon`, `title`, `description`, `sub_title`, `image`, `createdAt`, `updatedAt`, `description2`, `image2`) VALUES
(2, 'icon-1686566886973-829891329-solution-img5.jpg', 'sdfsdfd', '<p>dgdfgdsfgdfdddd</p>\r\n', 'dsfdfdfgd', 'image-1686566886988-104667051-product-jpeg-500x500.webp', '2023-06-12 10:48:07', '2023-06-12 10:48:25', '<p>sdfdsgdfgs333333333333</p>\r\n', NULL),
(3, 'icon-1686642736192-68559360-home1-banner.jpg', 'were', '<p>werwerwere</p>\r\n', 'rewrew', 'image-1686642736295-733892257-solution-img2.jpg', '2023-06-13 07:52:16', '2023-06-13 07:52:16', NULL, NULL),
(4, 'icon-1686642811023-908417469-hospital.png', 'erer', '<p>34r3r</p>\r\n', '34r4r', 'image-1686642811074-382282834-product-jpeg-500x500.webp', '2023-06-13 07:53:31', '2023-06-13 07:53:31', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `industry_images`
--

CREATE TABLE `industry_images` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `industryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_images`
--

INSERT INTO `industry_images` (`id`, `image`, `industryId`, `createdAt`, `updatedAt`) VALUES
(1, 'image-1686572034559-963453025-choose-1.jpg', 2, '2023-06-12 12:04:43', '2023-06-12 12:13:54'),
(3, 'image-1686642752714-371546740-home1-banner.jpg', 3, '2023-06-13 07:52:32', '2023-06-13 07:52:32'),
(4, 'image-1686642825415-303811403-solution-img2.jpg', 4, '2023-06-13 07:53:45', '2023-06-13 07:53:45');

-- --------------------------------------------------------

--
-- Table structure for table `industry_main_titledescs`
--

CREATE TABLE `industry_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_main_titledescs`
--

INSERT INTO `industry_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(2, 'fe', 'fsdfd', '2023-06-16 13:53:44', '2023-06-16 13:53:44');

-- --------------------------------------------------------

--
-- Table structure for table `innovation_main_titledescs`
--

CREATE TABLE `innovation_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `innovation_main_titledescs`
--

INSERT INTO `innovation_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(5, 'werwe RRR', 'werwe', '2023-06-16 06:08:04', '2023-06-17 03:24:01');

-- --------------------------------------------------------

--
-- Table structure for table `innovatives`
--

CREATE TABLE `innovatives` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `innovatives`
--

INSERT INTO `innovatives` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'fdw', '<p>efwefwe</p>\r\n', '2023-06-17 03:24:22', '2023-06-29 06:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `main-service-main-titledescriptions`
--

CREATE TABLE `main-service-main-titledescriptions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `main_services`
--

CREATE TABLE `main_services` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_services`
--

INSERT INTO `main_services` (`id`, `image`, `title`, `description`, `createdAt`, `updatedAt`, `image2`, `status`) VALUES
(10, 'blog1.jpg', 'adsf', '<p>dfdsf</p>\r\n', '2023-04-17 04:47:37', '2023-06-21 05:55:22', 'image2-1687326921981-833459004-home1-banner.jpg', NULL),
(13, 'solution-img2.jpg', 'dfadsferwrfewfsf', '<p>dsgdfgdsrgewrger</p>\r\n', '2023-04-17 04:48:18', '2023-06-21 06:01:25', 'image2-1687327285227-785252277-home1-banner.jpg', NULL),
(16, 'image-1687061425194-713444932-solution-img1.jpg', 'zxcs', '<p>sdsfds</p>\r\n', '2023-06-16 19:47:21', '2023-06-18 04:16:44', 'image2-1687061804006-268812461-home1-banner.jpg', 0),
(17, 'image-1686944882493-211831388-client3.jpg', 'dfssfs d', '<p>ewrwdwqeqw4444444</p>\r\n', '2023-06-16 19:48:02', '2023-06-16 19:48:49', 'image2-1686944882498-756580866-blog2.jpg', 0),
(18, 'image-1687060952698-223452333-61LzQKWXupL._SL1024_.jpg', 'adasdasdas', '<p>asdasdas</p>\r\n', '2023-06-18 04:01:59', '2023-06-18 04:02:32', 'image2-1687060919213-848542668-solution-img5.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `main_service_main_titledescs`
--

CREATE TABLE `main_service_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_service_main_titledescs`
--

INSERT INTO `main_service_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'ewrw', 'erewr', '2023-06-16 13:10:07', '2023-06-20 05:30:27');

-- --------------------------------------------------------

--
-- Table structure for table `most_completed_main_titledescs`
--

CREATE TABLE `most_completed_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `most_completes`
--

CREATE TABLE `most_completes` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `most_completes`
--

INSERT INTO `most_completes` (`id`, `icon`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'image-1686651256009-594341012-home1-banner.jpg', 'om kumar 1', '<p>dgfergewrfrfedfdfghreertre fd</p>\r\n', '2023-04-25 07:54:11', '2023-06-13 10:14:16');

-- --------------------------------------------------------

--
-- Table structure for table `news_letters`
--

CREATE TABLE `news_letters` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news_letters`
--

INSERT INTO `news_letters` (`id`, `email`, `createdAt`, `updatedAt`) VALUES
(4, 'omkumar.alobha@gmail.com', '2023-04-24 07:38:21', '2023-04-24 07:38:21'),
(5, 'kaustubh.alobha@gmail.com', '2023-04-26 10:32:45', '2023-04-26 10:32:45'),
(6, 'omkrmishra4123@gmail.com', '2023-06-28 11:00:57', '2023-06-28 11:00:57'),
(7, 'omkrmishra4333333123@gmail.com', '2023-06-28 11:01:04', '2023-06-28 11:01:04');

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE `operations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(3, 'srwer', '2023-06-17 03:55:12', '2023-06-17 03:55:12');

-- --------------------------------------------------------

--
-- Table structure for table `operation_main_titledescs`
--

CREATE TABLE `operation_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `operation_main_titledescs`
--

INSERT INTO `operation_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'er3  erfe', 'ewre', '2023-06-16 06:48:39', '2023-06-17 03:54:43');

-- --------------------------------------------------------

--
-- Table structure for table `our_approaches`
--

CREATE TABLE `our_approaches` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_approaches`
--

INSERT INTO `our_approaches` (`id`, `title`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(3, 'om kumar  mishra', '<p>adweeww</p>\r\n', 'image-1687324738617-226210865-home1-banner.jpg', '2023-04-25 08:09:11', '2023-06-21 05:18:58');

-- --------------------------------------------------------

--
-- Table structure for table `our_approach_main_titledescs`
--

CREATE TABLE `our_approach_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_approach_main_titledescs`
--

INSERT INTO `our_approach_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(8, 'erter DD', 'rwerewr', '2023-06-15 14:24:00', '2023-06-16 06:09:34');

-- --------------------------------------------------------

--
-- Table structure for table `our_missions`
--

CREATE TABLE `our_missions` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_missions`
--

INSERT INTO `our_missions` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
(2, 'gdrs  erewr      ds  ', '2023-02-06 12:12:53', '2023-06-16 11:21:12');

-- --------------------------------------------------------

--
-- Table structure for table `our_visions`
--

CREATE TABLE `our_visions` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_visions`
--

INSERT INTO `our_visions` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
(8, '<p>fewefwef</p>\r\n', '2023-02-10 07:39:11', '2023-02-10 07:39:11'),
(9, '<p>wdweew</p>\r\n', '2023-02-10 07:45:02', '2023-02-10 07:45:02'),
(10, '<p>&nbsp;werte</p>\r\n', '2023-02-10 07:45:30', '2023-02-10 07:45:30'),
(11, '<p>sfdsf</p>\r\n', '2023-02-10 07:46:24', '2023-02-10 07:46:24'),
(12, '<p>qwewrwqe</p>\r\n', '2023-02-10 07:48:24', '2023-02-10 07:48:24'),
(13, '<p>asdasdas</p>\r\n', '2023-02-10 07:59:36', '2023-02-10 07:59:36'),
(14, '<p>sadadas</p>\r\n', '2023-02-13 04:46:47', '2023-02-13 04:46:47'),
(16, '<p>srferf</p>\r\n', '2023-05-30 10:04:37', '2023-05-30 10:51:09');

-- --------------------------------------------------------

--
-- Table structure for table `our_vision_main_titledescs`
--

CREATE TABLE `our_vision_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `icon1` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `icon`, `createdAt`, `updatedAt`, `link`, `icon1`) VALUES
(8, 'bank.png', '2023-04-24 12:05:25', '2023-04-24 12:08:17', 'https://sequelize.org/docs/v6/other-topics/migrations/', 'bankG.png'),
(9, 'icon-1686934500078-116783836-blog3.jpg', '2023-06-16 16:34:18', '2023-06-16 16:55:00', 'https://sequelize.org/docs/v6/other-topics/migrations/', 'icon2-1686933258730-289411746-hospitalG.png'),
(10, 'icon-1687763510314-322726568-solution-img5.jpg', '2023-06-26 07:11:50', '2023-06-26 07:11:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `securityservicemaintitles`
--

CREATE TABLE `securityservicemaintitles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `securityservicemaintitles`
--

INSERT INTO `securityservicemaintitles` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(6, 'What Is Your Current Security Status?5555 dfew', 'rwerwetyrdytewfffffffff44444444444445', '2023-06-14 07:27:38', '2023-06-16 05:44:18');

-- --------------------------------------------------------

--
-- Table structure for table `security_services`
--

CREATE TABLE `security_services` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `security_services`
--

INSERT INTO `security_services` (`id`, `icon`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(5, 'home1-banner.jpg', 'adassdasr', '<p>adasasdase</p>\r\n', '2023-02-07 04:23:08', '2023-04-21 06:43:37'),
(8, 'icon-1687324924308-208463396-solution-img6.jpg', 'wed', '<p>Sdasedsa</p>\r\n', '2023-02-13 09:27:09', '2023-06-21 05:22:04'),
(9, 'icon-1687262122194-233963309-home1-banner.jpg', 'we', '<p>qwdqw</p>\r\n', '2023-02-13 09:30:09', '2023-06-20 11:55:22'),
(13, 'icon-1687429070434-244676423-blog3.jpg', 'sadasd', '<p>asdsadasdsadasdas</p>\r\n', '2023-06-22 10:17:50', '2023-06-22 10:17:50');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220518055456-create-super-admin.js'),
('20230131050953-create-banner.js'),
('20230201043848-create-banner-content.js'),
('20230201074909-create-partner.js'),
('20230201103522-create-security-service.js'),
('20230202053307-create-main-service.js'),
('20230202072859-create-testimonial.js'),
('20230202113641-create-contact.js'),
('20230203055913-create-blog.js'),
('20230203090907-create-news-letter.js'),
('20230203103605-create-we-are.js'),
('20230203124119-create-our-vision.js'),
('20230206062709-create-our-mission.js'),
('20230207053526-AddColumnInPartner.js'),
('20230207063344-create-faq.js'),
('20230207090547-create-slug.js'),
('20230207115114-create-why-we.js'),
('20230208060742-create-why-we-count.js'),
('20230208072108-create-contact-us.js'),
('20230208105904-create-career.js'),
('20230209095007-create-faq-contact.js'),
('20230214051519-ChangeColumTypeBanner.js'),
('20230214060438-changeColumnTypeInOurMission.js'),
('20230424060505-add_column_email_in_contact.js'),
('20230424102104-AddColumnInPartnerImage.js'),
('20230425044419-create-our-approach.js'),
('20230425065847-create-most-complete.js'),
('20230425090136-create-innovative.js'),
('20230425101208-create-operation.js'),
('20230426110030-add_summery_in_contact.js'),
('20230608101036-create-security-service-main-title.js'),
('20230608112617-create-main-service-main-titledescription.js'),
('20230608114524-create-main-service-main-titledesc.js'),
('20230608122516-create-our-approach-main-titledesc.js'),
('20230608124444-create-testimonial-main-titledesc.js'),
('20230609072059-create-operation-main-titledesc.js'),
('20230609110918-create-blog-main-titledesc.js'),
('20230609122449-create-our-vision-main-titledesc.js'),
('20230612063919-create-most-completed-main-titledesc.js'),
('20230612070507-create-career-main-titledesc.js'),
('20230612074841-create-industry-details.js'),
('20230612101704-addColumnInIndustry.js'),
('20230612110125-create-industry-images.js'),
('20230612124939-create-industry-main-titledesc.js'),
('20230613044509-create-innovation-main-titledesc.js'),
('20230613090835-create-comman-banner.js'),
('20230613094058-create-career-info.js'),
('20230616115608-create-about-us.js'),
('20230616173243-AddColumnInService.js');

-- --------------------------------------------------------

--
-- Table structure for table `slugs`
--

CREATE TABLE `slugs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `slugName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slugs`
--

INSERT INTO `slugs` (`id`, `title`, `description`, `slugName`, `createdAt`, `updatedAt`) VALUES
(46, 'Term&Condition', '<p>ewedfgdfg</p>\r\n', 'term_condition', '2023-05-30 04:32:22', '2023-06-29 05:21:30'),
(47, 'Privacy Policy', '<p>sdtertersfse</p>\r\n', 'privacy_policy', '2023-05-30 04:32:22', '2023-06-29 05:21:55');

-- --------------------------------------------------------

--
-- Table structure for table `superadmins`
--

CREATE TABLE `superadmins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `superadmins`
--

INSERT INTO `superadmins` (`id`, `name`, `email`, `password`, `mobile`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$N09jRBWWO6h7ZhP9QD46du/SBCx3tx2D1GYhZGWlbAzxsnhPpo7h2', '7065054288', '2023-01-31 13:19:12', '2023-06-29 06:13:59');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `Name`, `image`, `message`, `designation`, `createdAt`, `updatedAt`) VALUES
(9, 'etervv', 'background-image.jpg', '<p>daasf</p>\r\n', 'sfsdfsd', '2023-02-13 10:12:03', '2023-02-13 10:12:03'),
(10, 'wwer', 'image-1686897050452-175238183-blog3.jpg', '<p>wrwer</p>\r\n', 'er', '2023-06-16 06:30:50', '2023-06-16 06:30:50');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial_main_titledescs`
--

CREATE TABLE `testimonial_main_titledescs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonial_main_titledescs`
--

INSERT INTO `testimonial_main_titledescs` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'dfs  rrrr', 'fsdedf', '2023-06-16 06:27:31', '2023-06-17 03:41:30');

-- --------------------------------------------------------

--
-- Table structure for table `we_ares`
--

CREATE TABLE `we_ares` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `we_ares`
--

INSERT INTO `we_ares` (`id`, `image`, `content`, `createdAt`, `updatedAt`) VALUES
(12, 'image-1686915373261-440172736-blog3.jpg', '<p>dasdwsdewdccccccccccc</p>\r\n', '2023-06-13 10:21:37', '2023-06-16 11:36:13');

-- --------------------------------------------------------

--
-- Table structure for table `why_wes`
--

CREATE TABLE `why_wes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `why_wes`
--

INSERT INTO `why_wes` (`id`, `title`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'wrwqr', 'background_image.webp', '<p>afsfs</p>\r\n', '2023-02-07 12:59:36', '2023-02-07 12:59:36'),
(4, 'sds   ', 'car.jpg', '<p>sfsdfs</p>\r\n', '2023-02-07 13:00:07', '2023-02-10 05:14:38'),
(5, 'esfewf', 'Best Cricket Blogs Websites.jpg', '<p>werfewwe</p>\r\n', '2023-02-13 10:23:47', '2023-02-13 10:26:35');

-- --------------------------------------------------------

--
-- Table structure for table `why_we_counts`
--

CREATE TABLE `why_we_counts` (
  `id` int(11) NOT NULL,
  `customers_served` int(11) DEFAULT NULL,
  `cybersecurity_projects` int(11) DEFAULT NULL,
  `customer_retention` int(11) DEFAULT NULL,
  `cybersecurity_experts` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `why_we_counts`
--

INSERT INTO `why_we_counts` (`id`, `customers_served`, `cybersecurity_projects`, `customer_retention`, `cybersecurity_experts`, `createdAt`, `updatedAt`) VALUES
(4, 3423, 35345, 34534, 345344, '2023-02-13 10:36:34', '2023-02-13 10:36:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bannercontents`
--
ALTER TABLE `bannercontents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_main_titledescs`
--
ALTER TABLE `blog_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `career_infos`
--
ALTER TABLE `career_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `career_main_titledescs`
--
ALTER TABLE `career_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comman_banners`
--
ALTER TABLE `comman_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq_contacts`
--
ALTER TABLE `faq_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_details`
--
ALTER TABLE `industry_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_images`
--
ALTER TABLE `industry_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_main_titledescs`
--
ALTER TABLE `industry_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `innovation_main_titledescs`
--
ALTER TABLE `innovation_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `innovatives`
--
ALTER TABLE `innovatives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main-service-main-titledescriptions`
--
ALTER TABLE `main-service-main-titledescriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_services`
--
ALTER TABLE `main_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_service_main_titledescs`
--
ALTER TABLE `main_service_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `most_completed_main_titledescs`
--
ALTER TABLE `most_completed_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `most_completes`
--
ALTER TABLE `most_completes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_letters`
--
ALTER TABLE `news_letters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operation_main_titledescs`
--
ALTER TABLE `operation_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_approaches`
--
ALTER TABLE `our_approaches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_approach_main_titledescs`
--
ALTER TABLE `our_approach_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_missions`
--
ALTER TABLE `our_missions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_visions`
--
ALTER TABLE `our_visions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_vision_main_titledescs`
--
ALTER TABLE `our_vision_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `securityservicemaintitles`
--
ALTER TABLE `securityservicemaintitles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `security_services`
--
ALTER TABLE `security_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `slugs`
--
ALTER TABLE `slugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `superadmins`
--
ALTER TABLE `superadmins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial_main_titledescs`
--
ALTER TABLE `testimonial_main_titledescs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `we_ares`
--
ALTER TABLE `we_ares`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `why_wes`
--
ALTER TABLE `why_wes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `why_we_counts`
--
ALTER TABLE `why_we_counts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bannercontents`
--
ALTER TABLE `bannercontents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `blog_main_titledescs`
--
ALTER TABLE `blog_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `career_infos`
--
ALTER TABLE `career_infos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `career_main_titledescs`
--
ALTER TABLE `career_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comman_banners`
--
ALTER TABLE `comman_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `faq_contacts`
--
ALTER TABLE `faq_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `industry_details`
--
ALTER TABLE `industry_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `industry_images`
--
ALTER TABLE `industry_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `industry_main_titledescs`
--
ALTER TABLE `industry_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `innovation_main_titledescs`
--
ALTER TABLE `innovation_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `innovatives`
--
ALTER TABLE `innovatives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `main-service-main-titledescriptions`
--
ALTER TABLE `main-service-main-titledescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `main_services`
--
ALTER TABLE `main_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `main_service_main_titledescs`
--
ALTER TABLE `main_service_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `most_completed_main_titledescs`
--
ALTER TABLE `most_completed_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `most_completes`
--
ALTER TABLE `most_completes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `news_letters`
--
ALTER TABLE `news_letters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `operation_main_titledescs`
--
ALTER TABLE `operation_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `our_approaches`
--
ALTER TABLE `our_approaches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `our_approach_main_titledescs`
--
ALTER TABLE `our_approach_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `our_missions`
--
ALTER TABLE `our_missions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `our_visions`
--
ALTER TABLE `our_visions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `our_vision_main_titledescs`
--
ALTER TABLE `our_vision_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `securityservicemaintitles`
--
ALTER TABLE `securityservicemaintitles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `security_services`
--
ALTER TABLE `security_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `slugs`
--
ALTER TABLE `slugs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `superadmins`
--
ALTER TABLE `superadmins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `testimonial_main_titledescs`
--
ALTER TABLE `testimonial_main_titledescs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `we_ares`
--
ALTER TABLE `we_ares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `why_wes`
--
ALTER TABLE `why_wes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `why_we_counts`
--
ALTER TABLE `why_we_counts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
