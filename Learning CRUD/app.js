const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'views')));
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
