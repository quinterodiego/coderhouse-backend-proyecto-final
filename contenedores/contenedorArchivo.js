import fs from 'fs';
import moment from 'moment';

class Contenedor {
    constructor ( path ) {
        this.path = path;
    }

    save = async ( item ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse( data );
            let id = 0;
            if(items.length > 0) {
                const IdsItems = items.map(p => p.id);
                id = Math.max(...IdsItems) + 1;
            } else {
                id = 1;
            }
            const date = new Date();
            const timestamp = moment(date).format('DD/MM/YYYY HH:mm:ss');
            const nuevoItem = { ...item, id, timestamp };
            items.push( nuevoItem );
            await fs.promises.writeFile( this.path, JSON.stringify( items, null, 2 ));
            return id;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse( data );
            const itemBuscado = items.filter( i => i.id == id);
            if (itemBuscado.length > 0) {
                return itemBuscado[0];
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
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse( data );
            return items;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const items = JSON.parse( data );
            const nuevosItems = items.filter( p => p.id != id);
            await fs.promises.writeFile( this.path, JSON.stringify(nuevosItems, null, 2));
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await fs.promises.writeFile(this.path, '[]');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, item) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            let items = JSON.parse( data );
            items = items.filter( p => p.id != id);
            // item.id = parseInt(id);
            items.push(item);
            items.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            await fs.promises.writeFile( this.path, JSON.stringify(items, null, 2));
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;