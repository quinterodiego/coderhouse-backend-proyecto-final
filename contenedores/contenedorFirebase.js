import admin from "firebase-admin"
import config from '../config.js'

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
}) : admin.app();

const db = app.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    save = async ( item ) => {
        try {
            const doc = this.coleccion.doc();
            await doc.create(item);
            const querySnapshot = await this.coleccion.get();
            const docs = querySnapshot.docs;
            const response = docs.map((doc) => {
                return { id: doc.id, data: doc.data()}
            })
            response.sort(function (a, b) {
                if (a.data.timestamp > b.data.timestamp) {
                    return 1;
                }
                if (a.data.timestamp < b.data.timestamp) {
                    return -1;
                }
                return 0;
            });
            const index = response.length - 1
            console.log('Item creado');
            return response[index].id;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const doc = this.coleccion.doc(id);
            const data = await doc.get();
            const item = data.data();
            return item;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const querySnapshot = await this.coleccion.get();
            const docs = querySnapshot.docs;
            const response = docs.map((doc) => {
                return { id: doc.id, data: doc.data()}
            })
            return response;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const doc = this.coleccion.doc(id);
            await doc.delete();
            console.log('Producto eliminado');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await this.coleccion.listDocuments().then(doc => {
                doc.map((d) => {
                    d.delete()
                })
            })
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, item) => {
        try {
            const doc = this.coleccion.doc(id);
            await doc.update(item)
            console.log('Item actualizado');
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default ContenedorFirebase