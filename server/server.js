const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
//   res.send(`Hi! Server is listening on port ${port}`)
    res.send(users)
});

// listen on the port
app.listen(port);


let users = 
[
  {
    id: 1,
    firstname: 'zoe',
    lastname : 'clark',
    email : 'zoe@gmail.com',
    password : 'zoe_123'
  }
];