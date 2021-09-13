CREATE DATABASE personal_budget;

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    UNIQUE (username,email)
);
CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    description VARCHAR(40) NOT NULL,
    UNIQUE (description)        
);

CREATE TABLE envelopes(
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) NOT NULL,
    user_id INT REFERENCES user(id) NOT NULL, 
    amount FLOAT (2) NOT NULL
);

/*CREATE TABLE transactions(
    date 
    payment_amount
    payment_recipient
    envelope
);*/
