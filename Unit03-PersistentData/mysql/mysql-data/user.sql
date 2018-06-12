INSERT INTO user (Host,User,Password,ssl_cipher,x509_issuer,x509_subject,authentication_string) VALUES('%','nodeuser',PASSWORD('password'),'','','','');
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON nodejs.* to nodeuser@localhost;
FLUSH PRIVILEGES