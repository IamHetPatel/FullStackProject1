const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//public static path
const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));

//routing
app.get("/",(req,res)=>{
    res.send("welcome to Het Patel's Website")
})

app.get("/about",(req,res)=>{
    res.send("welcome to Het Patel's about page")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to Het Patel's weather page")
})

app.get("*",(req,res)=>{
    res.send("404 error!!")
})
app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
});