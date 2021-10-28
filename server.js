const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Following this guide
// https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ATLAS database
const uri = process.env.ATLAS_URL;

console.log(uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
});

const eventsRouter = require('./backend/routes/events');
app.use('/events', eventsRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
