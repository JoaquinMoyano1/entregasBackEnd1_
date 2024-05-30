const express = require('express');
const connectDB = require('./db');
const path = require('path');

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Rutas
app.use('/api/messages', require('./routes/messageRoutes
