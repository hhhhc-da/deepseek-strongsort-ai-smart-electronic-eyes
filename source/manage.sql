/*
 Navicat Premium Dump SQL

 Source Server         : nanoka-80
 Source Server Type    : MySQL
 Source Server Version : 80037 (8.0.37)
 Source Host           : localhost:3308
 Source Schema         : manage

 Target Server Type    : MySQL
 Target Server Version : 80037 (8.0.37)
 File Encoding         : 65001

 Date: 04/04/2025 22:22:28
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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of behavior
-- ----------------------------
INSERT INTO `behavior` VALUES (2, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在右转车道内，红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\n\n(DeepSeek)你好，我是DeepSeek，很高兴为您提供服务。请问您有什么具体的问题或需要帮助的地方吗？我将在24小时内为您提供详细的解答和证据链。如果您有其他问题或需要进一步的帮助，请随时告诉我。\n\n(DeepSeek)你好，我是DeepSeek，很高兴为您提供', -1, '2025-04-04 21:25:43');
INSERT INTO `behavior` VALUES (3, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内、红灯下直行，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:29:08');
INSERT INTO `behavior` VALUES (4, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内，绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:29:18');
INSERT INTO `behavior` VALUES (5, '津ABCDEF', '根据提供的信息，车辆津ABCDEF在直行车道内、绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。', -1, '2025-04-04 21:30:54');

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
  `hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '秘钥'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of security
-- ----------------------------
INSERT INTO `security` VALUES ('86fb269d190d2c85f6e0468ceca42a20');

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
) ENGINE = InnoDB AUTO_INCREMENT = 88869 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of web
-- ----------------------------
INSERT INTO `web` VALUES (88857, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"车辆津ABCDEF在左转车道内、红灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 20:53:28', '415', 'ba6f33b9-7cdf-4f83-8d96-5354cd188883');
INSERT INTO `web` VALUES (88858, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"车辆津ABCDEF在直行和左转车道内，红灯下左转，属于闯红灯加未按交通信号灯行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 20:55:50', '415', '4d67f944-f693-43bf-95c5-5235bbabb87a');
INSERT INTO `web` VALUES (88859, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"根据提供的信息，车辆津ABCDEF在直行车道内、绿灯下直行，属于闯红灯加未按道路要求行驶，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 21:00:37', '415', '98326fc0-e03f-4bde-b5eb-70d9f8578900');
INSERT INTO `web` VALUES (88860, '127.0.0.1', '81', '/upload', 'POST', '{\"security\":\"86fb269d190d2c85f6e0468ceca42a20\", \"plate\":\"津ABCDEF\", \"text\":\"根据提供的信息，车辆津ABCDEF在左转车道内、绿灯下左转，属于闯红灯，有交通违法行为。如果你有其他问题，欢迎随时提问。\", \"real\":-1}', '2025-04-04 21:00:46', '415', '82f9ae4e-1b58-455e-addf-2a01865dc586');
INSERT INTO `web` VALUES (88863, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\uff0c\\u7ea2\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-04 21:18:24', '500', 'b64d1628-e9ad-4ab8-8216-5c3a81e01c3a');
INSERT INTO `web` VALUES (88864, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u5de6\\u8f6c\\u8f66\\u9053\\u5185\\uff0c\\u7eff\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-04 21:19:46', '500', '1d80b155-afe2-4d4e-bed2-a47ab7e0d1ad');
INSERT INTO `web` VALUES (88865, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u53f3\\u8f6c\\u8f66\\u9053\\u5185\\uff0c\\u7ea2\\u706f\\u4e0b\\u5de6\\u8f6c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\\n\\n(DeepSeek)\\u4f60\\u597d\\uff0c\\u6211\\u662fDeepSeek\\uff0c\\u5f88\\u9ad8\\u5174\\u4e3a\\u60a8\\u63d0\\u4f9b\\u670d\\u52a1\\u3002\\u8bf7\\u95ee\\u60a8\\u6709\\u4ec0\\u4e48\\u5177\\u4f53\\u7684\\u95ee\\u9898\\u6216\\u9700\\u8981\\u5e2e\\u52a9\\u7684\\u5730\\u65b9\\u5417\\uff1f\\u6211\\u5c06\\u572824\\u5c0f\\u65f6\\u5185\\u4e3a\\u60a8\\u63d0\\u4f9b\\u8be6\\u7ec6\\u7684\\u89e3\\u7b54\\u548c\\u8bc1\\u636e\\u94fe\\u3002\\u5982\\u679c\\u60a8\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\u6216\\u9700\\u8981\\u8fdb\\u4e00\\u6b65\\u7684\\u5e2e\\u52a9\\uff0c\\u8bf7\\u968f\\u65f6\\u544a\\u8bc9\\u6211\\u3002\\n\\n(DeepSeek)\\u4f60\\u597d\\uff0c\\u6211\\u662fDeepSeek\\uff0c\\u5f88\\u9ad8\\u5174\\u4e3a\\u60a8\\u63d0\\u4f9b\", \"real\": 1}', '2025-04-04 21:25:43', '500', '43168bc9-3467-48d1-a8ad-80259e2478dd');
INSERT INTO `web` VALUES (88866, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u76f4\\u884c\\u8f66\\u9053\\u5185\\u3001\\u7ea2\\u706f\\u4e0b\\u76f4\\u884c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": 1}', '2025-04-04 21:29:08', '200', 'a329d39f-7b4f-43d3-9eac-066e1dbe1ea1');
INSERT INTO `web` VALUES (88867, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u76f4\\u884c\\u8f66\\u9053\\u5185\\uff0c\\u7eff\\u706f\\u4e0b\\u76f4\\u884c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\u52a0\\u672a\\u6309\\u9053\\u8def\\u8981\\u6c42\\u884c\\u9a76\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": 1}', '2025-04-04 21:29:18', '200', '4bd795bf-88b5-46e5-9f17-5253943ae6f6');
INSERT INTO `web` VALUES (88868, '127.0.0.1', '81', '/upload', 'POST', '{\"security\": \"86fb269d190d2c85f6e0468ceca42a20\", \"plate\": \"\\u6d25ABCDEF\", \"text\": \"\\u6839\\u636e\\u63d0\\u4f9b\\u7684\\u4fe1\\u606f\\uff0c\\u8f66\\u8f86\\u6d25ABCDEF\\u5728\\u76f4\\u884c\\u8f66\\u9053\\u5185\\u3001\\u7eff\\u706f\\u4e0b\\u76f4\\u884c\\uff0c\\u5c5e\\u4e8e\\u95ef\\u7ea2\\u706f\\u52a0\\u672a\\u6309\\u9053\\u8def\\u8981\\u6c42\\u884c\\u9a76\\uff0c\\u6709\\u4ea4\\u901a\\u8fdd\\u6cd5\\u884c\\u4e3a\\u3002\\u5982\\u679c\\u4f60\\u6709\\u5176\\u4ed6\\u95ee\\u9898\\uff0c\\u6b22\\u8fce\\u968f\\u65f6\\u63d0\\u95ee\\u3002\", \"real\": -1}', '2025-04-04 21:30:54', '200', '58d3283f-8ea6-445c-bf54-ec13a11e0bc9');

SET FOREIGN_KEY_CHECKS = 1;
