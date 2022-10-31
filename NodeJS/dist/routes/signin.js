"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
function loginRoute(req, res) {
    const jwt = require('jsonwebtoken');
    const { username, password } = req.query;
    const userName = "arshiyan"; // mock data (temporary)
    const passWord = "1234";
    if ((username === null || username === void 0 ? void 0 : username.toString()) != userName || (password === null || password === void 0 ? void 0 : password.toString()) != passWord)
        return res.status(401).json({
            "message": "Invalid Credentials!",
            "status": "401"
        });
    const token = jwt.sign({ "id": 1, "username": "arshiyan" }, "hello", { expiresIn: "1h" });
    res.status(200).json({
        "token": token,
        "username": username
    });
}
exports.loginRoute = loginRoute;
