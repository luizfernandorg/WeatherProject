//jshint esversion:6
const express = require("express");
const https = require('https');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html");
});

app.get("/getTemperature", (req,res) => {
    const city = req.query.q;
    const token = "eag"; //fake token, put a real one here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=br&appid=${token}`;
    https.get(url, (data) => {
        //if you have a valid toke above coment out the live bellow
        res.json({"country":'BR',"icon":'10d',"weather": 'Raining',"city":'São Paulo',"temp": 25});
        data.on("data", (d) => {
            const jsonData = JSON.parse(d);
            // uncoment line bellow if you have a valid token
            //res.json({"country": jsonData.sys.country,"icon":jsonData.weather[0].icon,"weather": jsonData.weather[0].description,"city":jsonData.name,"temp": jsonData.main.temp});
        });

    });
    
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});