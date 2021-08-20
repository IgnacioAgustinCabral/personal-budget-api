CREATE DATABASE personal_budget;


CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    description VARCHAR(40) NOT NULL
);

CREATE TABLE envelopes(
    id SERIAL PRIMARY KEY,
    category_id INT UNIQUE REFERENCES categories(id) NOT NULL,
    amount FLOAT (2) NOT NULL
);

/*CREATE TABLE transactions(
    date 
    payment_amount
    payment_recipient
    envelope
);*/
