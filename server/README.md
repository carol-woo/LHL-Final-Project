The database:
PostgreSQL with NodeJS
Uses PG pool to create the connection with the express server
After creating the PG database and the seed file(s), run the following command within the psql sessions:
\i seeds/01_tables.sql
You may replace "01_tables" with the appropriate seed file name