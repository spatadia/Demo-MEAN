/*
const express = require('express');

const app = express();

app.info("");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
res.setHeader('Access-Control-Allow-Methods',
'GET, POST, PATCH, DELETE, OPTIONS'
);

app.use('/api/info', (req, res, next) => {
  const info = [
    {
      id: 'dfg1',
      first: 'Sagar',
      last: 'Patadia',
      email: 'spatadia@email.sc.edu',
      address: '49 Castle Cary Ct.',
      city: 'Columbia',
      state: 'SC',
      zip: '29209'
    }

  ];

  res.status(200).json({
    message: 'Information fetched successfully!',
    info: info
  });
});

module.exports = app;
*/

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Info = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://demoapp:hanuman1@cluster0-wbfz6.mongodb.net/node-angular?retryWrites=true')
.then(() => {
  console.log('Connected to MongoDB server')
})
.catch(() => {
  console.log('Connection error!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Info({
    first: req.body.first,
    last: req.body.last,
    address: req.body.address,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    zipc: req.body.zipc
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  Info.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

module.exports = app;

// A9GqQR2cSfOfYG3l
