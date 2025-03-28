const express = require('express')
const EventEmitters = require('events')

const app = express();

const event = new EventEmitters();

let count = 0;

event.on("countAPI", ()=>{
    count++;
    console.log("Event called" , count);
})

app.get('/',(req,resp)=>{
    resp.send("Api called")
    event.emit("countAPI")
})
app.get('/search',(req,resp)=>{
    resp.send("Search done")
    event.emit("countAPI")
})
app.get('/update',(req,resp)=>{
    resp.send("Update Done")
    event.emit("countAPI")
})

app.listen(5000);