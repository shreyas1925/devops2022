const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

let PORT = 5000; // this is the container's port which I have to listen

app.listen(PORT, () => {
    console.log(`App running at ${PORT}`)
})