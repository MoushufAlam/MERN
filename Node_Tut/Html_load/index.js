const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname,'Base');

// app.use(express.static(publicPath)) it gives .html extension in website name

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);