-- INSERT DATA INTO TABLES

-- Insert into the users table
INSERT INTO accounts

INSERT INTO users (name, email, password_digest, account_id)
VALUES ('vasily', 'vasily@vasily.com', 'test', '2')

INSERT INTO categories (name, account_id, icon_image_path)
VALUES ('Gas', '2', CURRENT_TIMESTAMP, '../something')

INSERT INTO transactions (store_name, category_id, amount, entered_on, description)
VALUES ('metro', '1', '50.00', 'may', 'bought a bunch of stuff')