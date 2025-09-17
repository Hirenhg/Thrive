const express = require('express');
const connectDB = require('./database/config/db');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('../src/routes/auth'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
