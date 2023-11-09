import express from "express";
import bodyParser  from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://wttr.in/"

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{

    res.render("index.ejs", {content:"name"});

})

app.post("/get-val", async (req,res)=>{
    const ress = req.body;
    console.log(ress)
 try{
    const result = await axios.get(API_URL + req.body +"?format=j1");
    res.render("index.ejs",{content: JSON.stringify( result.data)});
    console.log(result);
 }catch(error){
    console.log(error);
 }
})


app.listen(port,(req,res)=>{
    console.log("Server is running on port 3000");
})

