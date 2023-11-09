import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.render("index.ejs", {content:"name"});

})


app.listen(port,(req,res)=>{
    console.log("Server is running on port 3000");
})
