// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// server.js (agrega estas líneas)
const authRoutes = require('./routes/authRoutes');
// server.js (agrega estas líneas)
const protectedRoutes = require('./routes/protectedRoutes');

// Usar rutas
app.use('/api/auth', authRoutes);



// Usar rutas protegidas
app.use('/api/protected', protectedRoutes);


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Define the PORT
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
