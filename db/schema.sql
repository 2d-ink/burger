CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db; 

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL, 
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);

