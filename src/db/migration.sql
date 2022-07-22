DROP DATABASE IF EXISTS techport;

CREATE DATABASE techport;
\l
\c techport;
 
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS universities CASCADE;

CREATE TABLE universities(
    university_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR,
    logo_url TEXT,
    background_url TEXT
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(64),
    password TEXT,
    email VARCHAR,
    role INT,
    university_id INT REFERENCES universities(university_id) 
);

CREATE TABLE tickets(
    ticket_id SERIAL PRIMARY KEY NOT NULL,
    open_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0),
    close_date TIMESTAMP,
    problem VARCHAR(64),
    description TEXT,
    note TEXT,
    point_of_contact VARCHAR(64),
    location TEXT,
    priority INT,
    status INT,
    university_id INT REFERENCES universities(university_id),
    assigned_tech INT REFERENCES users(user_id)
);


\i src/db/seed.sql

SELECT * FROM users;
SELECT * FROM tickets;
SELECT * FROM universities;

\d
\dt 
\d users
\d tickets
\d universities