INSERT INTO user (Host,User,authentication_string,ssl_cipher,x509_issuer,x509_subject) VALUES('%','nodeuser',PASSWORD('password'),'','','');
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON nodejs.* to nodeuser@localhost;
FLUSH PRIVILEGES;