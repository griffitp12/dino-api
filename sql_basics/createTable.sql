CREATE TABLE dinos(
    id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    eats VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    comments TEXT NOT NULL,
    PRIMARY KEY (id)
);