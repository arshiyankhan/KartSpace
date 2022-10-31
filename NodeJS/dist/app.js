"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signin_1 = require("./routes/signin");
const app = (0, express_1.default)();
//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.render("home");
});
app.get('/signin', (req, res) => {
    res.render("signin");
});
app.get('/login', signin_1.loginRoute);
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000/');
});
