/*
 Navicat Premium Dump SQL

 Source Server         : mysql_nanoka_80
 Source Server Type    : MySQL
 Source Server Version : 80037 (8.0.37)
 Source Host           : localhost:3308
 Source Schema         : manage

 Target Server Type    : MySQL
 Target Server Version : 80037 (8.0.37)
 File Encoding         : 65001

 Date: 05/04/2025 16:07:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '员工ID',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录密码',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '员工姓名',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '员工邮箱',
  PRIMARY KEY (`account`) USING BTREE,
  INDEX `username`(`username` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('admin', 'admin', 'Administrator', 'company01@gmail.com');
INSERT INTO `account` VALUES ('nanoka', '12345678n', '菜乃花', 'zhengbindesu@gmail.com');

-- ----------------------------
-- Table structure for behavior
-- ----------------------------
DROP TABLE IF EXISTS `behavior`;
CREATE TABLE `behavior`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `plate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `text` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `review` int NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of behavior
-- ----------------------------
INSERT INTO `behavior` VALUES (2, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在右转车道内，红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\n\n(DeepSeek)你好，我是DeepSeek，很高兴为您提供服务。请问您有什么具体的问题或需要帮助的地方吗？我将在24小时内为您提供详细的解答和证据链。如果您有其他问题或需要进一步的帮助，请随时告诉我。\n\n(DeepSeek)你好，我是DeepSeek，很高兴为您提供', -1, '2025-04-04 21:25:43');
INSERT INTO `behavior` VALUES (3, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内、红灯下直行，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:29:08');
INSERT INTO `behavior` VALUES (4, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内，绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:29:18');
INSERT INTO `behavior` VALUES (5, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内、绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:30:54');
INSERT INTO `behavior` VALUES (6, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在左转车道内、红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-05 13:58:23');
INSERT INTO `behavior` VALUES (7, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内、绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-05 14:15:02');
INSERT INTO `behavior` VALUES (8, '津ABCDEF', '车辆津ABCDEF在直行车道内，绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-05 14:15:11');
INSERT INTO `behavior` VALUES (9, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在左转车道内、红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-05 14:15:19');

-- ----------------------------
-- Table structure for cookie
-- ----------------------------
DROP TABLE IF EXISTS `cookie`;
CREATE TABLE `cookie`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `a1`(`account` ASC) USING BTREE,
  CONSTRAINT `a1` FOREIGN KEY (`account`) REFERENCES `account` (`account`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cookie
-- ----------------------------

-- ----------------------------
-- Table structure for credit
-- ----------------------------
DROP TABLE IF EXISTS `credit`;
CREATE TABLE `credit`  (
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `credit` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`account`) USING BTREE,
  CONSTRAINT `a2` FOREIGN KEY (`account`) REFERENCES `account` (`account`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of credit
-- ----------------------------
INSERT INTO `credit` VALUES ('admin', 'gTpTEo', '2024-05-07 23:09:27');
INSERT INTO `credit` VALUES ('nanoka', 'Dqvszv', '2024-06-29 16:37:33');

-- ----------------------------
-- Table structure for security
-- ----------------------------
DROP TABLE IF EXISTS `security`;
CREATE TABLE `security`  (
  `hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '秘钥',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of security
-- ----------------------------
INSERT INTO `security` VALUES ('686814B53720631FB57FD83CE57A1D20', 'classify');
INSERT INTO `security` VALUES ('86fb269d190d2c85f6e0468ceca42a20', 'upload');

-- ----------------------------
-- Table structure for status
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status`  (
  `code` int NOT NULL COMMENT '攻击码',
  `time` datetime NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES (1, '2025-04-05 14:15:29');

-- ----------------------------
-- Table structure for web
-- ----------------------------
DROP TABLE IF EXISTS `web`;
CREATE TABLE `web`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `port` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `body` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `time` datetime NOT NULL,
  `status` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '500',
  `request_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 89117 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of web
-- ----------------------------
INSERT INTO `web` VALUES (88857, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"车辆津ABCDEF在左转车道内、红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 20:53:28', '415', 'ba6f33b9-7cdf-4f83-8d96-5354cd188883');
INSERT INTO `web` VALUES (88858, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"车辆津ABCDEF在直行和左转车道内，红灯下左转，属于闯红灯加未按交通信号灯行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 20:55:50', '415', '4d67f944-f693-43bf-95c5-5235bbabb87a');
INSERT INTO `web` VALUES (88859, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"根据提供的信息，车辆津ABCDEF在直行车道内、绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 21:00:37', '415', '98326fc0-e03f-4bde-b5eb-70d9f8578900');
INSERT INTO `web` VALUES (88860, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"根据提供的信息，车辆津ABCDEF在左转车道内、绿灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 21:00:46', '415', '82f9ae4e-1b58-455e-addf-2a01865dc586');
INSERT INTO `web` VALUES (88869, '127.0.0.1', '81', '/upload', 'GET', '', '2025-04-05 13:32:05', '405', 'd0b07d08-dcd1-41b1-a249-1eda5f25398f');
INSERT INTO `web` VALUES (88870, '127.0.0.1', '81', '/favicon.ico', 'GET', '', '2025-04-05 13:32:05', '404', '4362ed0c-5304-4437-ae8f-9b64a7f4a55f');
INSERT INTO `web` VALUES (88871, '127.0.0.1', '81', '/security', 'GET', '', '2025-04-05 13:32:17', '405', '98c7380f-4597-41d9-93d2-b228b74c4dec');
INSERT INTO `web` VALUES (88872, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 0}', '2025-04-05 13:33:37', '200', 'cdfd4d14-8b31-4248-b889-b9acf93bd503');
INSERT INTO `web` VALUES (88873, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 4}', '2025-04-05 13:33:42', '200', 'f77c436a-677e-495a-af6a-ba5e0b2be31c');
INSERT INTO `web` VALUES (88874, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:33:48', '200', '095bc053-4ac8-4780-9ae6-55822fc4e241');
INSERT INTO `web` VALUES (88875, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:33:53', '200', 'a588c8f5-29f7-4c85-bd5c-8e1deee779d3');
INSERT INTO `web` VALUES (88876, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:33:58', '200', '9733caa3-3572-4e3f-aaae-701e7ac1fd2c');
INSERT INTO `web` VALUES (88877, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:03', '200', '236e5d06-a60f-4c4c-8f08-81519f12bf99');
INSERT INTO `web` VALUES (88878, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:08', '200', '534a8932-de27-407d-8c0c-6387d8a3a422');
INSERT INTO `web` VALUES (88879, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:14', '200', '58b557f3-3a8e-4a2a-9ad2-e8bc7781a905');
INSERT INTO `web` VALUES (88880, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:19', '200', '7a2239e6-3997-43fc-826a-f1f9181bb8c2');
INSERT INTO `web` VALUES (88881, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:24', '200', 'f15caf0b-d16f-40b6-a0a2-3e2fadbcf7d9');
INSERT INTO `web` VALUES (88882, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:29', '200', 'b5dd7a42-864c-4a1c-adbb-49614d4bbdb1');
INSERT INTO `web` VALUES (88883, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:35', '200', '92ab64e4-cc73-4a3c-84bd-fa0cea5af7fd');
INSERT INTO `web` VALUES (88884, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:40', '200', '5dc910a9-66b5-4f53-a9e5-19ebd5df162a');
INSERT INTO `web` VALUES (88885, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:45', '200', '6949e9d6-2a77-44f9-8ad9-2d4d66b2fb6e');
INSERT INTO `web` VALUES (88886, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:50', '200', '1e0d603d-5457-4dee-a6c4-231a82143bb7');
INSERT INTO `web` VALUES (88887, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:34:56', '200', '994a5477-ae84-4c1e-9bd6-e70d9120e023');
INSERT INTO `web` VALUES (88888, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:01', '200', '50f70c34-c16e-4324-99ee-968464c6d18a');
INSERT INTO `web` VALUES (88889, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:06', '200', 'a4e9af26-8668-4bcf-9418-dfaea38a9514');
INSERT INTO `web` VALUES (88890, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:11', '200', '274f0c72-c1df-48cf-b7aa-904e7e086490');
INSERT INTO `web` VALUES (88891, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:17', '200', '4bbbac3d-ccae-42da-947d-0d485e8f6d8f');
INSERT INTO `web` VALUES (88892, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:22', '200', '8a19f6f0-de21-46b6-a538-a5242fec5024');
INSERT INTO `web` VALUES (88893, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:27', '200', '955e9666-e322-40dc-99cb-336f49754349');
INSERT INTO `web` VALUES (88894, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:32', '200', '9a00357e-bbdf-4886-9df6-b406e28b4060');
INSERT INTO `web` VALUES (88895, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:37', '200', '8ecf9645-f51f-403d-9910-91b70a87fcaa');
INSERT INTO `web` VALUES (88896, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:43', '200', '2d5b1560-92cd-4a49-a8c0-bc7e34997a77');
INSERT INTO `web` VALUES (88897, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:48', '200', '8423ca4c-2a41-4560-a55f-20f0b2b15653');
INSERT INTO `web` VALUES (88898, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:53', '200', 'a8fb7612-8ca2-4f78-9fcd-f1e096b4f5a3');
INSERT INTO `web` VALUES (88899, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:35:58', '200', '3b24717d-d4de-4931-9596-fc104b204e3f');
INSERT INTO `web` VALUES (88900, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:04', '200', '2da26b49-11d5-4f98-9f3b-465344fe4ccc');
INSERT INTO `web` VALUES (88901, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:09', '200', '1ff26ab0-8233-4c0f-9c28-302b4fce7cee');
INSERT INTO `web` VALUES (88902, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:14', '200', '84a8b46b-1c23-412a-ade7-ad91fe4c2a30');
INSERT INTO `web` VALUES (88903, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:19', '200', '7cff7dbf-2f71-412b-9dcb-e7281c39e5aa');
INSERT INTO `web` VALUES (88904, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:25', '200', '7586bb7f-599a-4bb9-971e-8cb751c8fc80');
INSERT INTO `web` VALUES (88905, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:30', '200', '7695e3f1-a546-4012-bc74-e1a38640b924');
INSERT INTO `web` VALUES (88906, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:35', '200', 'e214be3e-4d86-4211-ad54-f78ba8666a81');
INSERT INTO `web` VALUES (88907, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:40', '200', '89de939f-7edd-4339-9059-0b5fc01f988e');
INSERT INTO `web` VALUES (88908, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:46', '200', '1e84d673-1eed-463f-b5d9-45419b4361dd');
INSERT INTO `web` VALUES (88909, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:51', '200', '69f2552b-bff3-4c99-b346-beed9242a811');
INSERT INTO `web` VALUES (88910, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:36:56', '200', 'fd9764b9-0b30-473f-aee1-a92ea2b885ce');
INSERT INTO `web` VALUES (88911, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:01', '200', 'f987af76-0b51-4fb8-a75b-1d506ce36067');
INSERT INTO `web` VALUES (88912, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:06', '200', '07d10803-e256-41b2-a6bd-0207f9bc7469');
INSERT INTO `web` VALUES (88913, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:12', '200', '92b2d581-3830-42fa-b78d-1042a9cc430a');
INSERT INTO `web` VALUES (88914, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:17', '200', 'ab10dafc-0988-4116-90df-dba9b5798b71');
INSERT INTO `web` VALUES (88915, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:22', '200', '9644a3bc-50d7-45de-9127-1c88f3bfff70');
INSERT INTO `web` VALUES (88916, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:27', '200', 'b8537f2a-bc0a-44dd-a9c8-15ffc4bf0675');
INSERT INTO `web` VALUES (88917, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:37:33', '200', '975dc49e-c4cd-47f8-82b6-17931aad7b09');
INSERT INTO `web` VALUES (88918, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:38:41', '200', 'f6b2889c-a229-4d52-b6cc-50c63d1cc08e');
INSERT INTO `web` VALUES (88919, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:38:46', '200', 'c2597fc0-1080-4b0b-87c7-c6fa56f8f6b5');
INSERT INTO `web` VALUES (88920, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:38:51', '200', '2e035c77-e4ae-4ebb-980a-7425e6ef3537');
INSERT INTO `web` VALUES (88921, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:38:56', '200', '65e83e06-5ef8-4be4-9ffe-a1c38e4bd026');
INSERT INTO `web` VALUES (88922, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:02', '200', '3970c16b-85cb-44a1-9963-efc113b4eaf1');
INSERT INTO `web` VALUES (88923, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:07', '200', 'eea3b248-3da7-4a75-bd95-2ff51b442a0d');
INSERT INTO `web` VALUES (88924, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:12', '200', 'e8f9c910-bdb7-44c2-b279-d13c07919e96');
INSERT INTO `web` VALUES (88925, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:18', '200', '7512923d-a52b-453a-95f0-12c509be4556');
INSERT INTO `web` VALUES (88926, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:23', '200', 'fc364a6d-13ae-4642-b7b2-146a122b60d6');
INSERT INTO `web` VALUES (88927, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:28', '200', 'be6e0a58-916f-4f0a-b6a7-e02cea5c967d');
INSERT INTO `web` VALUES (88928, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:33', '200', '45102e0c-a729-4b92-acd3-c4be87e2a1f6');
INSERT INTO `web` VALUES (88929, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:38', '200', '9c2acb78-7716-453d-a010-40919eddf70e');
INSERT INTO `web` VALUES (88930, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:44', '200', 'c8d562f2-9287-4201-9852-6cdfff257495');
INSERT INTO `web` VALUES (88931, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:49', '200', 'de88194e-5250-4094-99c5-829ee8989c5e');
INSERT INTO `web` VALUES (88932, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:54', '200', 'ac57b760-e961-471a-8211-a685f28a101d');
INSERT INTO `web` VALUES (88933, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:39:59', '200', '5ef75fc5-a2c1-4c94-a1ab-b2eedf6ec94a');
INSERT INTO `web` VALUES (88934, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:05', '200', '94e50835-7ebd-498e-bd57-7591b79ae77f');
INSERT INTO `web` VALUES (88935, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:10', '200', 'efd8cdc7-84e7-4fcf-8064-67b32330cc66');
INSERT INTO `web` VALUES (88936, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:15', '200', 'c52d906f-00a4-4c10-85d4-17485abb0896');
INSERT INTO `web` VALUES (88937, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:20', '200', '09af6905-4bf4-49ec-a4a4-d57608fc7683');
INSERT INTO `web` VALUES (88938, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:26', '200', '6317ac8d-4588-4b04-bf01-54d0ab90e0fa');
INSERT INTO `web` VALUES (88939, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:31', '200', '0b80abf2-6cda-460e-957f-0835d2e54a9e');
INSERT INTO `web` VALUES (88940, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:36', '200', '1859204b-7bd4-40c9-9909-b4e51b27e5c4');
INSERT INTO `web` VALUES (88941, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:41', '200', '224922a0-3bfa-4707-a362-44ea3ac3eb6d');
INSERT INTO `web` VALUES (88942, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:47', '200', '94eb9de1-a210-424c-9802-bb1e35414227');
INSERT INTO `web` VALUES (88943, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:52', '200', '77c5e20d-177e-4631-b040-18791178fe57');
INSERT INTO `web` VALUES (88944, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:40:57', '200', '9a3b44f4-4bc6-48dc-83d0-dc6f783c61e2');
INSERT INTO `web` VALUES (88945, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:02', '200', 'd9814b2a-da96-4d60-a855-f8f8592bea98');
INSERT INTO `web` VALUES (88946, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:08', '200', 'cd308f6d-d3c8-40da-a95c-bd904a2a3c56');
INSERT INTO `web` VALUES (88947, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:13', '200', '0867b46f-c904-4685-aaca-176ced15e48b');
INSERT INTO `web` VALUES (88948, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:18', '200', 'f3007b3e-c2fd-461a-836e-84206c7b2805');
INSERT INTO `web` VALUES (88949, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:44', '200', 'ad4eec0e-0709-436f-ae95-b61afe557143');
INSERT INTO `web` VALUES (88950, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:49', '200', '2555d15e-43be-4166-bbd2-1f657b50e4ed');
INSERT INTO `web` VALUES (88951, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:41:55', '200', '0836f4d0-7915-4e48-8352-f89596f911ea');
INSERT INTO `web` VALUES (88952, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:00', '200', 'd6c2b778-e2c8-4d7c-8fde-e1d12486e222');
INSERT INTO `web` VALUES (88953, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:05', '200', '6c963a31-663f-4c5b-988b-0fb3b3af689e');
INSERT INTO `web` VALUES (88954, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:16', '200', '25b248bb-c6da-4990-a279-6aaa052bfc98');
INSERT INTO `web` VALUES (88955, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:21', '200', '1a154f1c-0ef3-486b-a3b9-efe6a9f27fb6');
INSERT INTO `web` VALUES (88956, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:26', '200', '88d5736a-625b-4ddd-b54d-0a1278338786');
INSERT INTO `web` VALUES (88957, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:31', '200', '1d357dd6-1199-4358-9de1-0827df27e0e5');
INSERT INTO `web` VALUES (88958, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:36', '200', 'bb62b6b7-ee5f-4d9e-b61c-5bb6f26b487b');
INSERT INTO `web` VALUES (88959, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:42', '200', '42661441-8a96-41e5-b2af-9e0060f02b21');
INSERT INTO `web` VALUES (88960, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:47', '200', '364e6887-90fe-47d2-abd4-126e9cb3d4ae');
INSERT INTO `web` VALUES (88961, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:52', '200', '66eac1e1-fdc8-446b-86a4-511e53578f10');
INSERT INTO `web` VALUES (88962, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:42:57', '200', '6302c652-1cfd-4fe3-86fb-a509d77157a1');
INSERT INTO `web` VALUES (88963, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:03', '200', '0c0bb998-d0dc-4825-9719-8c358cd61ff5');
INSERT INTO `web` VALUES (88964, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:08', '200', '0fc35f82-cc42-4ac5-ad26-f480875016d8');
INSERT INTO `web` VALUES (88965, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:22', '200', 'e240dc24-273c-4846-ba6d-13baa4467918');
INSERT INTO `web` VALUES (88966, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:22', '200', '61992e33-6ed0-42f0-b97f-c1ceb7559121');
INSERT INTO `web` VALUES (88967, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:24', '200', '46e70ff8-3972-4b9f-a70a-4222b98b2266');
INSERT INTO `web` VALUES (88968, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:29', '200', '17f0bd27-c7bf-4f1f-8b43-cb077cdb724b');
INSERT INTO `web` VALUES (88969, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:34', '200', 'c92d8b84-f7cf-4eb1-97eb-43fd7be1dc0a');
INSERT INTO `web` VALUES (88970, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:39', '200', '6650165f-3c7c-475e-80a9-7a57b7d220a0');
INSERT INTO `web` VALUES (88971, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:45', '200', 'd0d0a532-1959-4df1-9f54-51a87449d6c8');
INSERT INTO `web` VALUES (88972, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:50', '200', '36fc3ace-048b-47cb-83ea-58c69d8a5087');
INSERT INTO `web` VALUES (88973, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:43:55', '200', 'eb123c49-48a5-4024-abed-00398f521bef');
INSERT INTO `web` VALUES (88974, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:00', '200', '63bbc280-4a61-40a1-8119-f88cc4e27c61');
INSERT INTO `web` VALUES (88975, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:05', '200', '6a7004d3-e23e-4f97-9580-1fc0cefa1966');
INSERT INTO `web` VALUES (88976, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:11', '200', '8116a788-de12-4b84-b61c-54a3309d7a57');
INSERT INTO `web` VALUES (88977, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:16', '200', '4d3a1be4-0f5a-4e75-b586-96fbbdf78758');
INSERT INTO `web` VALUES (88978, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:21', '200', '2ac945ad-7f9f-4795-9d47-c387639514f2');
INSERT INTO `web` VALUES (88979, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:27', '200', '6901f5ce-7944-4165-8ea6-c6992b3988fb');
INSERT INTO `web` VALUES (88980, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:32', '200', '3d564248-1d87-461c-9fa1-b401c7f841b7');
INSERT INTO `web` VALUES (88981, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:37', '200', 'c4087ca6-798a-4509-8fc0-93bd280932cb');
INSERT INTO `web` VALUES (88982, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:42', '200', 'd25241b2-bffe-4087-8fa0-fb88c4c6e603');
INSERT INTO `web` VALUES (88983, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:47', '200', '26dc3705-1097-4fe3-a67c-e0b3d975c0c5');
INSERT INTO `web` VALUES (88984, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:53', '200', 'c8fb4c89-dce8-48e0-9022-c46bdabca6e2');
INSERT INTO `web` VALUES (88985, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:44:58', '200', '96a3cd29-8611-461a-9924-8e1c86ee867b');
INSERT INTO `web` VALUES (88986, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:03', '200', '65447d05-3810-44b6-8f43-0d0bb1b542c6');
INSERT INTO `web` VALUES (88987, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:08', '200', '3588305d-92c8-40d1-9812-2ab2c6d51a97');
INSERT INTO `web` VALUES (88988, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:14', '200', '51a74202-9a32-45e3-acac-cac4d0ed57b7');
INSERT INTO `web` VALUES (88989, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:19', '200', '2192412f-6aa0-4e49-b109-2040ae556eda');
INSERT INTO `web` VALUES (88990, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:24', '200', '5c23735f-8cce-44c0-9182-3cb964096777');
INSERT INTO `web` VALUES (88991, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:29', '200', '0e94ff04-3175-439a-a89e-9f0fcd2362eb');
INSERT INTO `web` VALUES (88992, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:35', '200', 'b8d2f690-9404-4680-8c05-73218f958cff');
INSERT INTO `web` VALUES (88993, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:40', '200', 'bc1084ec-42d3-467d-b802-8197ea9c6dd1');
INSERT INTO `web` VALUES (88994, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:45', '200', '52c0b821-a363-4edf-a338-64b738b845d2');
INSERT INTO `web` VALUES (88995, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:50', '200', 'dca9a6b1-38b3-485a-9dc0-2e35fdfe4592');
INSERT INTO `web` VALUES (88996, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:45:56', '200', '003566be-cbd4-4f20-8f19-9248166b3c01');
INSERT INTO `web` VALUES (88997, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:01', '200', '06c0e566-ca8b-47c9-9bb8-05ccbe7ca565');
INSERT INTO `web` VALUES (88998, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:06', '200', '1cacad68-6050-423b-b157-d18c7730cf51');
INSERT INTO `web` VALUES (88999, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:11', '200', '477a8ef7-40db-432c-ba92-1582e89d3278');
INSERT INTO `web` VALUES (89000, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:16', '200', '73ff6d9b-b005-4e6e-9abe-fcac535ca1a5');
INSERT INTO `web` VALUES (89001, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:22', '200', '95c9457b-14d3-4229-9858-f810224d10e9');
INSERT INTO `web` VALUES (89002, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:27', '200', 'bd39b113-d773-45e9-be60-e7c976990cd3');
INSERT INTO `web` VALUES (89003, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:32', '200', 'b416d887-3f9a-478c-9a5c-8ca3565a9ab6');
INSERT INTO `web` VALUES (89004, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:37', '200', 'f1ace41f-2c48-475f-a041-21a41a9fbf3e');
INSERT INTO `web` VALUES (89005, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:43', '200', '0c59ecdf-6c08-41b6-ac3e-aa6165b9763d');
INSERT INTO `web` VALUES (89006, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:48', '200', 'c2de909d-74ab-4a79-8b83-88ae70409f74');
INSERT INTO `web` VALUES (89007, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:53', '200', '5a8ce3ec-676b-44ad-87d7-25144d85157e');
INSERT INTO `web` VALUES (89008, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:46:58', '200', '21bfb773-cfb7-4cc1-8def-e53f3aae5cd3');
INSERT INTO `web` VALUES (89009, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:04', '200', '3233593d-a81c-4dc9-b652-9ff3395519ba');
INSERT INTO `web` VALUES (89010, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:09', '200', 'a857acb9-e5c2-472c-8a49-c02776497d73');
INSERT INTO `web` VALUES (89011, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:14', '200', '1a423635-fbd1-48a9-b9b6-dd56bf6f0133');
INSERT INTO `web` VALUES (89012, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:19', '200', '6c7dd2f7-847b-433c-9042-4907cef7cf05');
INSERT INTO `web` VALUES (89013, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:25', '200', '83e5c7cb-6c4d-409b-b11a-2a4678db14f5');
INSERT INTO `web` VALUES (89014, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:30', '200', 'f3a210e3-5eab-404c-be3c-2c2caf09a4f1');
INSERT INTO `web` VALUES (89015, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:35', '200', 'dd6229f6-1c59-4a90-903d-d6d37ea296a8');
INSERT INTO `web` VALUES (89016, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:40', '200', 'e12676ab-0501-4dac-b543-f1ce07e47cff');
INSERT INTO `web` VALUES (89017, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:45', '200', 'a0eae167-9a70-4afb-a8a3-8b0d05e98d50');
INSERT INTO `web` VALUES (89018, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:51', '200', '0ccf4d1e-e26b-4bc8-b123-97ad4bc8ba76');
INSERT INTO `web` VALUES (89019, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:47:56', '200', '69370cd3-86ee-40f0-b21c-fee92c682200');
INSERT INTO `web` VALUES (89020, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:01', '200', '9286e316-13ea-4c16-89d3-75df415f7450');
INSERT INTO `web` VALUES (89021, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:06', '200', '0bf244e1-8c6d-414b-bdcc-472ff182a78b');
INSERT INTO `web` VALUES (89022, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:12', '200', '7565c4c5-a3e7-45f9-bdc0-1aef1e905107');
INSERT INTO `web` VALUES (89023, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:17', '200', 'c9ac8929-d59d-4f1f-b69e-aa7e43d59f2c');
INSERT INTO `web` VALUES (89024, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:22', '200', 'b35f9f3e-ce15-414f-a7f9-eb3565e8a503');
INSERT INTO `web` VALUES (89025, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:27', '200', '6bd564d3-1eef-4ed1-a1b5-86e3dbabaccd');
INSERT INTO `web` VALUES (89026, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:33', '200', '4592ee08-6190-4c7f-91f6-035b5350d0c4');
INSERT INTO `web` VALUES (89027, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:38', '200', '3372542b-27ab-45d9-8eaa-7f72cca72b48');
INSERT INTO `web` VALUES (89028, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:43', '200', '1bc8b13c-c1cb-4ddc-a606-1f1ca98d51fa');
INSERT INTO `web` VALUES (89029, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:48', '200', '04d9ca6e-84f5-45d1-951b-c818f2f77bd2');
INSERT INTO `web` VALUES (89030, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:54', '200', 'ac52d258-4b78-44b5-af83-cf75f9a7c5b9');
INSERT INTO `web` VALUES (89031, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:48:59', '200', '16010b2c-5cd0-4408-b8b3-351f964f29de');
INSERT INTO `web` VALUES (89032, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:04', '200', '524eb101-2d46-4fb4-ac74-2ad9633d01ad');
INSERT INTO `web` VALUES (89033, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:09', '200', '3d5e8fa7-b9bd-402d-b4d3-fafb4c87ca13');
INSERT INTO `web` VALUES (89034, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:14', '200', 'e2656f35-525e-4c11-a7db-c245210c036a');
INSERT INTO `web` VALUES (89035, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:20', '200', 'e9dd77ab-17e8-44dc-92e3-fa6955c65e2a');
INSERT INTO `web` VALUES (89036, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:25', '200', '6d01d836-a9fe-431c-8213-bfdaa46ffdfa');
INSERT INTO `web` VALUES (89037, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:30', '200', '6cb56fee-9732-4c18-a1fb-11a2713fcdd0');
INSERT INTO `web` VALUES (89038, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:35', '200', '7cad030a-0563-406b-bcde-21d62223c0b8');
INSERT INTO `web` VALUES (89039, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:41', '200', 'e4992195-efa3-4de1-8f98-8f556795c0bf');
INSERT INTO `web` VALUES (89040, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:46', '200', 'dd8e87f4-963a-487d-a099-80224d43d930');
INSERT INTO `web` VALUES (89041, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:51', '200', '6ad7a23c-2281-44d9-bd83-a90e41464612');
INSERT INTO `web` VALUES (89042, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:49:56', '200', '0fb7701d-5893-4994-96f1-8ce277bdca7a');
INSERT INTO `web` VALUES (89043, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:02', '200', '781b3153-ae47-4473-aa21-876693c755bc');
INSERT INTO `web` VALUES (89044, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:07', '200', '1a399cda-86c4-4e91-b99f-453e660a4b9e');
INSERT INTO `web` VALUES (89045, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:12', '200', 'a9cea51a-9243-4370-82f4-138d1b427807');
INSERT INTO `web` VALUES (89046, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:17', '200', '2526cb49-2d77-4762-8381-b971392e16bb');
INSERT INTO `web` VALUES (89047, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:22', '200', '7169f6e5-6bee-4b04-97e3-08322959629c');
INSERT INTO `web` VALUES (89048, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:28', '200', '45969e81-20d3-42c9-a26e-262a252dbfe1');
INSERT INTO `web` VALUES (89049, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:33', '200', '0ca854b0-d279-4231-a570-a89d77187b8f');
INSERT INTO `web` VALUES (89050, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:38', '200', '8fde2fd3-befe-4500-99e4-4490d891feb2');
INSERT INTO `web` VALUES (89051, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:44', '200', '1d79daac-b3d3-4367-983b-8ee36422e75d');
INSERT INTO `web` VALUES (89052, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:49', '200', '542c8aa4-fa55-4c1b-9025-c3aeb98781c5');
INSERT INTO `web` VALUES (89053, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:54', '200', '1e2d09ec-6130-4ce4-975e-642405cb8ec4');
INSERT INTO `web` VALUES (89054, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:50:59', '200', '943a07e8-bc43-4b55-bca1-85e91060dd8e');
INSERT INTO `web` VALUES (89055, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:05', '200', 'a861c5a0-722b-4184-a3f8-e1dadb7f5c17');
INSERT INTO `web` VALUES (89056, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:10', '200', 'bbc0ea06-92a7-4948-994b-f4771a3e12f7');
INSERT INTO `web` VALUES (89057, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:15', '200', '6a613513-c95e-497c-99e1-4f2e2adb312b');
INSERT INTO `web` VALUES (89058, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:20', '200', 'f72ffa0b-d8e7-4386-8f53-676cee93d675');
INSERT INTO `web` VALUES (89059, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:26', '200', 'ea432416-b9cf-49c8-9f63-da0eac126447');
INSERT INTO `web` VALUES (89060, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:31', '200', 'f496768a-a5f3-4ced-b880-a012a31e5f21');
INSERT INTO `web` VALUES (89061, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:36', '200', 'a5a0640a-b8c6-49db-ae9a-1f1fc43d905e');
INSERT INTO `web` VALUES (89062, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:41', '200', 'c5b49639-f3cd-48a8-b8e1-916e3885a111');
INSERT INTO `web` VALUES (89063, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:46', '200', 'b3eb5fa1-a5d9-4402-97f8-7be09cfca3d8');
INSERT INTO `web` VALUES (89064, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:52', '200', '6ac16c0e-8ea6-4316-8b2d-3d86cf28c82d');
INSERT INTO `web` VALUES (89065, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:51:57', '200', 'efc4a311-2c02-415d-acf3-0805f8f4dc58');
INSERT INTO `web` VALUES (89066, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:02', '200', '26afe4ff-f31d-4317-9976-f0d0c226ca9c');
INSERT INTO `web` VALUES (89067, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:07', '200', 'f5ceab9b-668a-4afa-941e-e94dbf582895');
INSERT INTO `web` VALUES (89068, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:13', '200', '0f74a1be-c5f7-4197-a527-1ceb3b3865a2');
INSERT INTO `web` VALUES (89069, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:18', '200', 'e6064885-8fce-425b-a47d-7ea073101546');
INSERT INTO `web` VALUES (89070, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:23', '200', '0fca769f-05e8-45eb-8430-59083fba5624');
INSERT INTO `web` VALUES (89071, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:29', '200', 'bda71d87-7c2c-4a70-a06a-b28c3a9297dc');
INSERT INTO `web` VALUES (89072, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:34', '200', '45730545-c5f4-4e5e-a101-4564da5f55bc');
INSERT INTO `web` VALUES (89073, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:39', '200', '35c14b5d-e50b-4dd6-a352-0c5232e11af4');
INSERT INTO `web` VALUES (89074, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:44', '200', '7cceb725-2d5a-471d-99b9-ed9843b42a96');
INSERT INTO `web` VALUES (89075, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:50', '200', '29905a66-e733-4900-9d46-71ebed87a621');
INSERT INTO `web` VALUES (89077, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:52:55', '200', 'cdb3e8dd-94c3-424d-914a-623b67d9390a');
INSERT INTO `web` VALUES (89078, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:00', '200', 'ef325fa8-a056-444b-b919-ee58958c6b26');
INSERT INTO `web` VALUES (89080, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:05', '200', '97916ce9-254f-46a0-b6d0-1e71441a619e');
INSERT INTO `web` VALUES (89081, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:11', '200', '6503eedf-c156-4633-b7b1-577f68f1347a');
INSERT INTO `web` VALUES (89082, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:16', '200', 'e6221a21-1299-4bdf-a230-210e2ae4b5e3');
INSERT INTO `web` VALUES (89083, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:21', '200', '2aced3b0-348c-4b6f-bf4f-8091e44dff02');
INSERT INTO `web` VALUES (89084, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:26', '200', '035f7582-6640-4b7b-ac68-352aa5eef834');
INSERT INTO `web` VALUES (89085, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:32', '200', '9f5a36cd-a554-4d02-b67c-d59cc9b44030');
INSERT INTO `web` VALUES (89086, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:37', '200', '28184fa6-531b-4d02-a5fb-770aee022140');
INSERT INTO `web` VALUES (89087, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:42', '200', '63a71771-1624-4fb5-b63a-3d7424eda60f');
INSERT INTO `web` VALUES (89088, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:47', '200', '6f97dfef-ab04-490e-b55c-9026f601b67e');
INSERT INTO `web` VALUES (89089, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:52', '200', 'c8d6ba13-86b2-4bae-b1d5-d599a42c04dd');
INSERT INTO `web` VALUES (89090, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:53:58', '200', 'a1542603-2876-48e2-a6d4-24e6eadcaf63');
INSERT INTO `web` VALUES (89091, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 3}', '2025-04-05 13:54:03', '200', '286fcd4d-44f5-4b10-b0c8-19996d8cbc6d');
INSERT INTO `web` VALUES (89092, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\u3001\\u7ea2\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 13:56:29', '500', 'c0255a14-99be-42c2-a8e1-0e557e75a7d6');
INSERT INTO `web` VALUES (89093, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\u3001\\u7eff\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 13:56:37', '500', 'c5acd78a-7ed9-4432-ba68-dde3846b9b99');
INSERT INTO `web` VALUES (89094, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\u3001\\u7ea2\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 13:58:23', '200', '787b93a5-8ee8-4cb3-b974-df4f85486a12');
INSERT INTO `web` VALUES (89095, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 0}', '2025-04-05 14:13:54', '200', '794408fb-c38f-4d28-a84d-05cc6dd75d00');
INSERT INTO `web` VALUES (89096, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:18', '200', 'fa03a23d-c2e9-40be-b21d-90bd0f3a2cc4');
INSERT INTO `web` VALUES (89097, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:20', '200', '153374bb-d52d-4fd5-af48-293e2e0cf68f');
INSERT INTO `web` VALUES (89098, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:20', '200', 'a2f16096-8747-4f12-8ea4-42499a1b2144');
INSERT INTO `web` VALUES (89099, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:20', '200', 'b2dfb1c7-ef63-442f-876c-96d4b858a1f7');
INSERT INTO `web` VALUES (89100, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:20', '200', '41fcf830-2b35-4191-afba-4ddd2731278b');
INSERT INTO `web` VALUES (89101, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:25', '200', 'be656bae-4cd9-41fd-800c-e0e793bd37d6');
INSERT INTO `web` VALUES (89102, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:31', '200', '6847fff6-5bc0-4e73-8dac-466b7bd2293e');
INSERT INTO `web` VALUES (89103, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:36', '200', '9bd0f5e1-9b96-4e71-b13b-d2dfb1071c27');
INSERT INTO `web` VALUES (89104, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:41', '200', '98450e41-7f7d-451d-974f-c7b8b52103f1');
INSERT INTO `web` VALUES (89105, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:47', '200', '8741ad71-4de6-469c-b0d5-474103bcb6b3');
INSERT INTO `web` VALUES (89106, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:52', '200', '0f6ea0e1-deca-4608-a8b8-1a7ab22df86c');
INSERT INTO `web` VALUES (89107, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:14:57', '200', '7d76780b-e2b9-47ad-82bc-b6ba3ec548e2');
INSERT INTO `web` VALUES (89108, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u76f4\\u884c\\u8f66\\u9053\\u5185\\u3001\\u7eff\\u706f\\u4e0b\\u76f4\\u884c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\u52a0\\u672a\\u6309\\u9053\\u8def\\u8981\\u6c42\\u884c\\u9a76\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 14:15:02', '200', '77aeed9a-3423-494b-ba8a-e9105b0d770b');
INSERT INTO `web` VALUES (89109, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:03', '200', '436fecda-4077-41e0-bd3f-0fbee0373d61');
INSERT INTO `web` VALUES (89110, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:08', '200', '43df83ae-5695-401d-aa94-90b679bfcbba');
INSERT INTO `web` VALUES (89111, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u76f4\\u884c\\u8f66\\u9053\\u5185\\uff0c\\u7eff\\u706f\\u4e0b\\u76f4\\u884c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\u52a0\\u672a\\u6309\\u9053\\u8def\\u8981\\u6c42\\u884c\\u9a76\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 14:15:11', '200', 'dfb33daa-040d-46d4-b998-8baeb88c8b06');
INSERT INTO `web` VALUES (89112, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:13', '200', 'f8e6d935-b8c5-4f73-9a71-67efab2a6e5e');
INSERT INTO `web` VALUES (89113, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:18', '200', '8cb4aae5-14dc-4716-8145-1783964dab06');
INSERT INTO `web` VALUES (89114, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\u3001\\u7ea2\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-05 14:15:19', '200', '2f639161-5282-4054-8402-6febc647607a');
INSERT INTO `web` VALUES (89115, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:24', '200', '8f41f30c-ed5a-4162-9372-12257209d87a');
INSERT INTO `web` VALUES (89116, '127.0.0.1', '81', '/security', 'POST', '{\"security\": \"686814B53720631FB57FD83CE57A1D20\", \"code\": 1}', '2025-04-05 14:15:29', '200', 'e0c1f32d-4603-4cc0-9d8d-64d44aae8531');

SET FOREIGN_KEY_CHECKS = 1;
