import express, { Application, Request, Response } from 'express'
import { loginRoute } from './routes/signin';
const app: Application = express()

//setting view engine to ejs
app.set("view engine", "ejs");

app.use(express.static('public'))

app.get('/', (req:Request, res: Response)=>{ 
       res.render("home");
});
app.get('/signin', (req: Request, res: Response)=>{
       res.render("signin")
});
app.get('/login', loginRoute);

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000/');
})
