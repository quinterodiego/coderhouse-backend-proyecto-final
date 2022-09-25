let productosDao
let carritosDao
import dotenv from 'dotenv';
dotenv.config();

switch (process.env.PERS) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/productosDaoArchivo.js');
        const { default: CarritosDaoArchivo } = await import('./carritos/carritosDaoArchivo.js');
        productosDao = new ProductosDaoArchivo();
        carritosDao = new CarritosDaoArchivo();
        break
    case 'firebase':
        const { default: ProductosDaoFirebase }  = await import('./productos/productosDaoFirebase.js');
        const { default: CarritosDaoFirebase }  = await import('./carritos/carritosDaoFirebase.js');
        productosDao = new ProductosDaoFirebase();
        carritosDao = new CarritosDaoFirebase();
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDB }  = await import('./productos/productosDaoMongoDB.js');
        const { default: CarritosDaoMongoDB }  = await import('./carritos/carritosDaoMongoDB.js');
        productosDao = new ProductosDaoMongoDB();
        carritosDao = new CarritosDaoMongoDB();
        break
    case 'mysql':
        const { default: ProductosDaoMySql } = await import('./productos/productosDaoMySql.js');
        const { default: CarritosDaoMySql } = await import('./carritos/carritosDaoMySql.js');
        productosDao = new ProductosDaoMySql();
        carritosDao = new CarritosDaoMySql();
        break
    case 'sqlite3':
        const { default: ProductosDaoSqlite3 } = await import('./productos/productosDaoSqlite3.js');
        const { default: CarritosDaoSqlite3 } = await import('./carritos/carritosDaoSqlite3.js');
        productosDao = new ProductosDaoSqlite3();
        carritosDao = new CarritosDaoSqlite3();
        break
    default:
        
        break
}

export { productosDao, carritosDao }