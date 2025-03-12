const express = require("express");

const app = express();

app.get("", (req, resp) => {
  resp.send(`
    <h1>Welcome to my website!!!</h1>
    <a href= "/about">Go to About Page</a>
    </br>
    <a href= "/help">Go to help Page</a>
    `);
});

app.get("/about", (req, resp) => {
  resp.send(`
  <input type="text" placeholder = "Enter text"/>
  <button>CLick me</button>
  <a href= "/">Go to home Page</a>
  </br>
  <a href= "/help">Go to help Page</a>
    `);
});
app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "ANil",
      username: "wobble",
    },
    {
      name: "Baston",
      username: "gaglo",
    },
  ]);
});

app.listen(5500);