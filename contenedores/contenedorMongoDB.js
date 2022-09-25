import mongoose from 'mongoose';
import config from './../config.js';

await mongoose.connect(config.mongodb.url, config.mongodb.options)

class Contenedor {
    constructor ( nombreColeccion, esquema ) {
        this.productoSchema = mongoose.Schema(esquema)
        this.coleccion = mongoose.model(nombreColeccion, this.productoSchema)
    }

    save = async ( producto ) => {
        try {
            const product = this.coleccion(producto)
            await product.save(producto);
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const producto = await this.coleccion.findById(id);
            return producto;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            return await this.coleccion.find();
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            await this.coleccion.deleteOne({ _id: id });
            console.log('Productos eliminado')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.coleccion.deleteMany({});
            console.log('Todos los productos eliminados')
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, product) => {
        try {
            const { title, price, thumbnail, code, stock, description, timestamp } = product;
            await this.coleccion.updateOne({ _id: id}, {
                title,
                price,
                thumbnail,
                code,
                stock,
                description,
                timestamp
            })
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;