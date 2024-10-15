require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectedDB = require('./config/db');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//connected to MongoDB
connectedDB();

//Define Routes
app.use('/api/tasks',require('./routes/taskRoutes'));
app.use('/api/users',require('./routes/userRoutes'));

//Start server
const PORT = process.env.PORT | 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));


