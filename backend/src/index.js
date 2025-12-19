const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Rutas
const usuariosRoutes = require('./routes/usuarios.routes');
const partidosRoutes = require('./routes/partidos.routes');

// 1️⃣ Crear app
const app = express();

// 2️⃣ Conectar a MongoDB
connectDB();

// 3️⃣ Middlewares
app.use(cors());
app.use(express.json());

// 4️⃣ Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/partidos', partidosRoutes);

// 5️⃣ Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend activo en http://localhost:${PORT}`);
});
