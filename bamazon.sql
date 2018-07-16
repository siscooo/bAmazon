DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (item_id int AUTO_INCREMENT, product_name VARCHAR (50) NOT NULL, department_name VARCHAR(50) NOT NULL, 	price INTEGER(10) NOT NULL, stock_quantity INTEGER(10) NOT NULL, PRIMARY KEY(item_id));

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Macbook Pro", "Electronics", 1500, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Hydro-Flask 40oz", "Sports and Outdoors", 43, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Electric Guitar", "Musical Instruments", 500, 10000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Monster Energy 24 Pack", "Grocery and Gourmet Food", 30, 100000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Haribo Gummy Bears", "Grocery and Gourmet Food", 12, 5000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Amazon Echo", "Electronics", 100, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Tea Tree Shampoo", "Body Care", 35, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dog Food", "Pet Supplies", 15, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Hairbrush", "Body Care", 5, 4000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Memory Foam Pillow", "Home", 25, 2300);

SELECT * FROM products;