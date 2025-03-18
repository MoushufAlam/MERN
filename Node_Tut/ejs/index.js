const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname,'Base');

// app.use(express.static(publicPath)) it gives .html extension in website name

app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user = {
        name : 'Anil siddhu',
        email : 'anil@siddhu.com',
        phone: '+91123456789',
        skills: ['Java','C++','C','Python'],
    }

    resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})
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