import { Request, Response } from 'express';

export function loginRoute(req:Request, res: Response){ 
    const jwt = require('jsonwebtoken');
    const { username, password } =  req.query
    
    const userName = "arshiyan" // mock data (temporary)
    const passWord = "1234"

    if (username?.toString() != userName || password?.toString() != passWord) return res.status(401).json({
           "message" : "Invalid Credentials!",
           "status" : "401"
    })
    
    const token = jwt.sign({"id": 1, "username": "arshiyan"}, "hello", { expiresIn: "1h" } );
    res.status(200).json({
           "token": token,
           "username" : username
    })
}