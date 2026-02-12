import https from "http"
import Home from "./src/home.js"
let server=https.createServer((req,res)=>{

    switch(req.url){
        case "/":{
            console.log(req.method);
            res.end("<h1> data 1</h1>")
            break;
        }
    }

})