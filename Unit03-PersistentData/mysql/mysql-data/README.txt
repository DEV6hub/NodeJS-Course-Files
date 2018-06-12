If you have a MySQL GUI tool, create the nodejs database and import the table and records from data.sql.

If not, create the database on the command line as follows:
(see http://www.pantz.org/software/mysql/mysqlcommands.html if you get stuck)

Create database called nodejs (use you path to mysql)
C:\Servers\MySql\bin\mysql -h localhost -u root -p
{enter your password when prompted}

At the mysql> prompt:

mysql> CREATE DATABASE nodejs;

mysql> USE nodejs;

mysql> DROP TABLE IF EXISTS `user`;

mysql> CREATE TABLE `user` (
	`user_ID` int(11) NOT NULL AUTO_INCREMENT,
	`userName` varchar(255) NOT NULL,
	`password` varchar(32) NOT NULL,
	PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

mysql> INSERT INTO `user` VALUES ('1','username','password'), ('2','oliver','oliver1'), ('3','rod','rod1'), ('4','martello','martello1'), ('5','myUserName','myPassword');


Make user and give access to new database
mysql> USE mysql;
mysql> INSERT INTO user (Host,User,Password,ssl_cipher,x509_issuer,x509_subject,authentication_string) VALUES('%','nodeuser',PASSWORD('password'),'','','','');
mysql> FLUSH PRIVILEGES;
mysql> GRANT ALL PRIVILEGES ON nodejs.* to nodeuser@localhost;
mysql> FLUSH PRIVILEGES;

