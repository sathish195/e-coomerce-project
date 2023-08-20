import express, { Application, Request, Response, } from "express";
import "./db/config"
import dbInit from "./db/init"
import Route from "./routes/index";
import axios from "axios"
import path from "path"
const cors: any = require("cors"); 


dbInit();


const app: Application = express(); 
const port = process.env.PORT || 3000;
app.use(cors()); // enable cors
// Body parsing Middleware
app.use(express.json()); // josn middle ware

//let uiCodePath = process.env.NODE_ENV == "development"? "client/dist" : "client-dist";
let uiCodePath = "client-dist"; //use this to debug production code 
app.use(express.static(path.join(__dirname, '..', uiCodePath))); 

app.get("/", async (req: Request, res: Response) => {
    return res.sendFile(
        path.join(__dirname, "..", uiCodePath, "index.html")
    );
});

//Intialising routes 
app.use('/api/v1', Route)


app.get("*", async (req: Request, res: Response) => {
    return res.sendFile(
        path.join(__dirname, "..", uiCodePath, "index.html")
    );
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
  })