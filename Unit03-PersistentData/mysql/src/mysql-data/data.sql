/*
MySQL Backup
Source Server Version: 5.5.31
Source Database: nodejs
Date: 1/3/2014 11:36:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_ID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records
-- ----------------------------
INSERT INTO `user` VALUES ('1','username','password'), ('2','oliver','oliver1'), ('3','rod','rod1'), ('4','martello','martello1'), ('5','myUserName','myPassword');
