require('dotenv').config();
const cors=require("cors")
const express = require('express');
const morgan = require('morgan');

// It automatically captures and logs useful details about incoming requests and responses, which is vital for debugging ,performance monitoring, and tracking user activity

const connectDB = require('./config/db');

const studentRoutes = require('./routes/student.routes');
const mensRoutes=require("./routes/mens.routes")
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())


// Routes
app.use('/api/students', studentRoutes);
app.use('/mens', mensRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('MongoDB CRUD API Running');
});

// Start server
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
