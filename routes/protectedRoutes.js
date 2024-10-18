// routes/protectedRoutes.js
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Ruta protegida de ejemplo
router.get('/profile', protect, (req, res) => {
    res.json({ message: `Bienvenido, usuario con ID: ${req.user.id}` });
});

module.exports = router;
