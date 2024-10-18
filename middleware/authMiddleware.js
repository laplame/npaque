// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No autorizado, token no encontrado' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Agregar el usuario decodificado al objeto de solicitud
        next(); // Pasar al siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = { protect };
