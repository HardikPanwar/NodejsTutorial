const express = require('express');
const server = express();

server.get("/", (req, res) => {
    console.log("hello nodemanbaba😂😂");
})

server.listen(5000);
