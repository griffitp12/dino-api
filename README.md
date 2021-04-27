# dino-api
Pete's Dinosaur API based on Shin's Dinopinions

This was created during my time as a student at Code Chrysalis

My son Shinsei has many opinions about Dinosaurs. This API serves as a way to access all of them, and also to add some of your own if you like. The main database is structured as a simple table with the following fields: ID (the primary key, and serially generated), name, eats (whether the dino eats plants or animals),size (Shin's options here are small, big, giant, and gigantic. The API user has no such restrictions), and comments.

This project uses only one table, called 'dinos' in the 'dinosaur_db' database. Thus all HTTP connections go through

api/dinosaur_db

The API supports a general GET request to grab all entries on 'dinos', as well as being searchable by dinosaur name.

Adding a dinasaur is done by adding a dinosaur name (via a post request), and then using a PATCH to fill in details (size, eats, comments).

It also supports a basic DELETE request.

Have fun exploring!

Peter