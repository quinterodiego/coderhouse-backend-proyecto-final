import express from 'express';
import {Server as HttpServer} from 'http';
import {Server as IOServer} from 'socket.io';

import routerProductos from './routers/productos.js';
import routerCarrito from './routers/carrito.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from 'dotenv';
dotenv.config();

const server = express();
const httpServer = new HttpServer(server);
const io = new IOServer(httpServer);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));
server.use('/api/productos', routerProductos);
server.use('/api/carrito', routerCarrito);

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/productos', (req, res) => {
    res.render('productos');
});

server.get('/carrito', (req, res) => {
    res.render('carrito');
});

server.get('/cargar', (req, res) => {
    res.render('cargar');
});

const PORT = 3000 || process.env.PORT;

io.on('connection', socket => {
    console.log(`Nuevo cliente conectado - ID: ${socket.id}`);
    socket.emit('nuevoCliente', socket.id);
});

httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

httpServer.on('error', (error) => console.error(`Se ha producido un error ${error}`));