console.log('Server-side code running');
const cors = require('cors')
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// serve files from the public directory
app.use(express.static('public'));
app.use(cors());

// connect to the db and start the express server
let db;

// ***Replace the URL below with the URL for your database***
const url =  'mongodb://127.0.0.1:27017/tasks';
// E.g. for option 2) above this will be:
// const url =  'mongodb://localhost:21017/databaseName';

MongoClient.connect(url, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database.db('clicks');
  // start the express web server listening on 8080
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/clicks', (req, res) => {

  db.collection('tasks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});