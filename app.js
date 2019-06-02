const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const appGenerator = require('./models/appGenerator.js');
const db = require('./models/db.js');
const auth = require('./models/auth.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());



app.post('/app/apphtml', (req, res) => {
  appGenerator.getApp(req.body, res);
});

app.get('/auth/', (req, res) => { 
  let code = req.query.code;
  auth.signIn(code, res);
});

app.get('/snooze/', (req, res) => { 
  let mailboxId = req.query.mailboxId;
  let conversationId = req.query.convoId;
  let userId = req.query.userId;
  let openInSeconds = req.query.openIn;

  // Add Snooze to DB

  if (true) {
    res.send("Snooze Request recieved for " + JSON.stringify(req.query));
    // next(); // Go to Snooze page
  } else {
    // Go to error
  }
});

app.use(express.static(path.join(__dirname, './client/')));

// Sandbox
// db.create("mailbox", {
//   "id": "",
//   "user_id": ""
// }, console.log, console.error)

app.listen(process.env.PORT || 8082);
console.log("Server running on http://localhost:" + (process.env.PORT || 8082));