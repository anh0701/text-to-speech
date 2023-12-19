const express = require('express');
const path = require('path'); 
const bodyPaser = require("body-parser");
const app = express();
const Gtts = require('gtts');
const urlencode = bodyPaser.urlencoded({extended: true});
app.use(urlencode)

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render('home');
});

app.get('/hear', function (req, res) {
  res.set({'Content-Type': 'audio/mpeg'});
  const gtts = new Gtts(req.query.text, req.query.lang);
  gtts.stream().pipe(res);
});

app.listen(3000, function () {
  console.log('Open url to hear Hallelujah http://localhost:3000/');
});

// http://localhost:3000/hear?lang=en&text=Hallelujah