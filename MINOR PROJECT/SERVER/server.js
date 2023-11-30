const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose any port you prefer

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventswift', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/process_signup', (req, res) => {
  const userData = req.body;

  // Create a new user using the MongoDB model
  const newUser = new User({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

  // Save the new user to the database
  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error saving user to the database.');
    } else {
      res.send('User registered successfully.');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
