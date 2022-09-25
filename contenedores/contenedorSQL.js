import knex from 'knex';

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }

    save = async ( producto ) => {
        try {
            await this.knex(this.tabla).insert(producto);
            console.log('Producto insertado')
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso save');
        }
    }

    getById = async ( id ) => {
        try {
            const producto = await this.knex.from(this.tabla).select('*').where('id', '=', id);
            return producto;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso getById');
        }
    }

    getAll = async () => {
        try {
            const productos = await this.knex.from(this.tabla).select('*');
            return productos;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso getAll');
        }
    }

    deleteById = async ( id ) => {
        try {
            await this.knex(this.tabla).where('id', '=', id).delete();
            console.log('Producto eliminado');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso deleteById');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.knex(this.tabla).delete();
            console.log('Productos eliminados');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso deleteAll');
        }
    }

    updateById = async (id, product) => {
        try {
            const { title, price, thumbnail, code, stock, description, timestamp } = product;
            await this.knex(this.tabla).where('id', '=', id).update({
                title,
                price,
                thumbnail,
                code,
                stock,
                description,
                timestamp
            })
            console.log('Productos actualizado')
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default ContenedorSQL