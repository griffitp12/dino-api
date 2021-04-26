const express = require('express');

const app = express();

app.use(express.json());

app.get("/api/dinosaur_db", async (_, res) => {
    console.log("hello from the server")
})

const port = 9999 || process.env.DB_PORT;
app.listen(9999, () => {
    console.log(`Server running at https://localhost:${port}!`)
})