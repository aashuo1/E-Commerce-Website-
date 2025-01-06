CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255) NOT NULL
);

-- Example data
INSERT INTO products (name, description, price, image_url) 
VALUES ('Product 1', 'Description of Product 1', 19.99, 'images/product1.jpg'),
       ('Product 2', 'Description of Product 2', 29.99, 'images/product2.jpg');
