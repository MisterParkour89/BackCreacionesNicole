const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Crear carpeta /uploads si no existe
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadsPath));

// Rutas
const uploadRoute = require('./routes/upload');
app.use('/upload', uploadRoute);

// Puerto para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});