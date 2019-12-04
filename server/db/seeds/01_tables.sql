-- -- INSERT DATA INTO TABLES

-- -- Insert into the users table

INSERT INTO users (name, email, password_digest,  budget)
VALUES ('Avijit', 'avijit@gmail.com', 'avijit', 6000),
('test', 'test@gmail.com', 'test', 6000),
('vasily', 'vasily@vasily.vasilyå', '86', 5000),
('Aiman', 'aiman@gmail.com', 'aiman', 5000),
('Carol', 'carol@gmail.com', 'carol', 5000);

INSERT INTO categories (name, category_budget)
VALUES 
('Recreational', 500),
('Miscellaneous', 500),
('Food', 500),
('Insurance', 300),
('Healthcare', 200),
('Rent', 800),
('Mortgage', 600),
('Home Maintenance', 120),
('Gas', 350),
('Parking', 200),
('Hydro', 60),
('Cell Phone', 80),
('Cable Internet', 100),
('Groceries', 500),
('Beverage', 200),
('Auto Insurance', 100),
('Home Insurance', 50),
('Public Transportation', 150),
('Pets', 60),
('Loans', 200);

-- 28 Categories
-- INSERT INTO categories (name, category_budget)
-- VALUES 
-- -- ('Housing', 1000),
-- -- ('Transportation', 400),
-- ('Recreational', 500),
-- ('Miscellaneous', 500),
-- ('Food', 500),
-- ('Insurance', 300),
-- ('Healthcare', 200),
-- ('Rent', 800),
-- ('Mortgage', 600),
-- -- ('Property Tax', 100),
-- ('Home Maintenance', 120),
-- ('Gas', 350),
-- ('Parking', 200),
-- -- ('Water', 50),
-- ('Hydro', 60),
-- -- ('Home Phone', 40),
-- ('Cell Phone', 80),
-- ('Cable Internet', 100),
-- ('Groceries', 500),
-- -- ('Restaurants', 300),
-- ('Beverage', 200),
-- -- ('Mortgage Insurance', 50),
-- ('Auto Insurance', 100),
-- ('Home Insurance', 50),
-- -- ('Life Insurance', 30),
-- ('Public Transportation', 150),
-- ('Pets', 60),
-- ('Loans', 200);





-- -- Date format will have to be yyyy-mm-dd