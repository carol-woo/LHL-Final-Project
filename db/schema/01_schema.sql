DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE accounts (
  id SERIAL KEY NOT NULL,
)

CREATE TABLE users (
  id SERIAL KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password_digest VARCHAR (255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE
)

CREATE TABLE categories (
  id SERIAL KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL,
  icon_image_path VARCHAR (255)
)

CREATE TABLE transactions (
  id SERIAL KEY NOT NULL,
  store_name VARCHAR (255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  entered_on DATE NOT NULL,
  description TEXT
)