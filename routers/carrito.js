import express from 'express';
const {Router} = express;
import { carritosDao as carritosApi } from '../daos/index.js';

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
    const carrito = req.body;
    const id = await carritosApi.save(carrito);
    res.send({
        message: `Carrito creado id: ${id}`
    })
});

routerCarrito.post('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    await carritosApi.saveProduct(id, producto)
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
    await carritosApi.deleteByProductId(id, id_prod);
    res.send({message: 'Producto eliminado'});
});

export default routerCarrito;