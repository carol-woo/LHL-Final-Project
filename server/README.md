The database:
PostgreSQL with NodeJS
Uses PG pool to create the connection with the express server
After creating the PG database and the seed file(s), run the following command within the psql sessions:
\i seeds/01_tables.sql
You may replace "01_tables" with the appropriate seed file name


CORS:
Installed cors dependency to resolve CORS issues when running client and server. Added to index.js

Queries_tier1:
This file is responsible for getting relatively larger amounts of data such as categories and transactions.
It contains database pool query functions

Queries_tier2:
This file is responsible for smaller functions such as verifications. It also contains database pool query functions.