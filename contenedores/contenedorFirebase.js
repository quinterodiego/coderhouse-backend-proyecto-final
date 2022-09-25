import admin from "firebase-admin"
import config from '../config.js'

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
}) : admin.app();

const db = app.firestore();
const query = db.collection('productos');

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    save = async ( producto ) => {
        try {
            const doc = query.doc();
            await doc.create(producto);
            console.log('Producto creado');
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const doc = query.doc(id);
            const item = await doc.get();
            const producto = item.data();
            return producto;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            const response = docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                price: doc.data().price,
                thumbnail: doc.data().thumbnail
            }))

            return response;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const doc = query.doc(id);
            await doc.delete();
            console.log('Producto eliminado');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await query.listDocuments().then(doc => {
                doc.map((d) => {
                    d.delete()
                })
            })
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, product) => {
        try {
            const { title, price, thumbnail, code, description, stock, timestamp } = product;
            const doc = query.doc(id);
            const item = await doc.update({
                title,
                price,
                thumbnail,
                code,
                stock,
                description,
                timestamp
            })
            console.log('Producto actualizado');
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default ContenedorFirebase