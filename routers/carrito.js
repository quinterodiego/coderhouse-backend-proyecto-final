import express from 'express';
const {Router} = express;
import { carritosDao as carritosApi } from '../daos/index.js';
import moment from 'moment';

const routerCarrito = Router();

routerCarrito.get('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const carrito = await carritosApi.getById(id);
    if (carrito === null ) {
        res.send({ error: 'Carrito no encontrado' });
    } else {
        res.send(carrito);
    }
});

routerCarrito.post('/', async (req, res) => {
    const date = new Date();
    const carrito = {
        timestamp: moment(date).format('DD/MM/YYYY HH:mm:ss'),
        productos: []
    };
    await carritosApi.save(carrito);
    res.send({
        message: `Carrito creado`
    })
});

routerCarrito.post('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const idProducto = req.body.id;
    const carrito = await carritosApi.getById(id);
    carrito.productos.push(idProducto);
    await carritosApi.updateById(id, carrito)
    res.send({message: 'Producto agregado al carrito'});
});

routerCarrito.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await carritosApi.deleteByCartId(id);
    res.send({message: 'Carrito eliminado'});
});

routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;
    const carrito = await carritosApi.getById(id);
    const index = carrito.productos.indexOf(id_prod);
    carrito.productos.splice(index, 1);
    console.log(carrito.productos)
    await carritosApi.updateById(id, carrito);
    res.send({message: 'Producto eliminado'});
});

export default routerCarrito;