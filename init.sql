-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS sampledb;

-- Allow access to user 'siddik' from any host (important for Docker)
CREATE USER IF NOT EXISTS 'siddik'@'%' IDENTIFIED BY 'siddik';
GRANT ALL PRIVILEGES ON sampledb.* TO 'siddik'@'%';
FLUSH PRIVILEGES;

-- Use the database
USE sampledb;

-- Create the nodeuser table if it doesn't exist
CREATE TABLE IF NOT EXISTS nodeuser (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(15),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
