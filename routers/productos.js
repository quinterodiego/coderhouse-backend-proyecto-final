import express from 'express';
import isAdmin from '../middlewares/isAdmin.js';
import { productosDao as productosApi } from '../daos/index.js';

const {Router} = express;

const routerProductos = Router();

routerProductos.get('/:id?', isAdmin, async (req, res) => {
    const id = req.params.id;
    if (id) {
        const producto = await productosApi.getById(id);
        (producto) ? res.send({Producto: producto}) : res.send({ error : 'Producto no encontrado' });
    } else {
        const productos = await productosApi.getAll();
        res.send(productos);
    }
});

routerProductos.post('/', async (req, res) => {
    const producto = req.body;
    await productosApi.save(producto);
    res.send({
        message: 'Producto agregado',
        producto: producto
    })
});

routerProductos.put('/:id', async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    await productosApi.updateById(id, product);
    res.send({
        message: 'Producto actualizado'
    })
});

routerProductos.delete('/:id?', async (req, res) => {

    const id = req.params.id;
    if (id) {
        await productosApi.deleteById(id);
        res.send({
            message: 'Producto eliminado'
        })
    } else {
        await productosApi.deleteAll();
        res.send({
            message: 'Productos eliminados'
        })
    }
});


export default routerProductos;