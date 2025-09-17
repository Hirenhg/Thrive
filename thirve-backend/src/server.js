require('dotenv').config(); // load .env (local dev ke liye)

const express = require('express');
const connectDB = require('./database/config/db');
const cors = require('cors');

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Use Render's port or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
