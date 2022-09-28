import mongoose from 'mongoose';
import config from './../config.js';

await mongoose.connect(config.mongodb.url, config.mongodb.options)

class Contenedor {
    constructor ( nombreColeccion, esquema ) {
        this.productoSchema = mongoose.Schema(esquema)
        this.coleccion = mongoose.model(nombreColeccion, this.productoSchema)
    }

    save = async ( data ) => {
        try {
            await this.coleccion.insertMany(data);
            const carrito = await this.coleccion.find().sort({timestamp: -1}).limit(1);
            return carrito[0]._id;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const item = await this.coleccion.findById(id);
            if(item) {
                return item;
            } else {
                return null;
            }
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

    updateById = async (id, item) => {
        try {
            await this.coleccion.updateOne({ _id: id}, {$set: item})
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;