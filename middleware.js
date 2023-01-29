const express = require('express');
const server = express();
const router = express.Router();
const urlCheck = function (req, res, next) {
    console.log("current route is", req.originalUrl);
    next();
}
server.use(urlCheck);
server.get('/', function (req, res) {
    res.send("Hello this is home page")
});
router.get('/login', urlCheck, function (req, res) {
    res.send("Hello this is login page")
});
server.get('/about', function (req, res) {
    res.send("Hello this about page")
});
server.use('/', router);
server.listen(4900);