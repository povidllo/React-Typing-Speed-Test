CREATE TYPE text_language AS ENUM ('ru', 'en');
CREATE TYPE text_length_type AS ENUM ('short', 'medium', 'long');
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL
);
CREATE TABLE texts (
    text_id SERIAL PRIMARY KEY,
    text_content TEXT NOT NULL,
    text_language text_language,
    text_length_type text_length_type
);
CREATE TABLE results (
    result_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    text_id INT REFERENCES texts(text_id),
    time_seconds INT NOT NULL,
    words_per_minute INT NOT NULL,
    accuracy INT NOT NULL
);