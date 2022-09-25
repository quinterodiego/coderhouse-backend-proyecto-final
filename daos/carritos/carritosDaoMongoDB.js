import Contenedor from "../../contenedores/ContenedorMongoDB.js"

class CarritosDaoMongoDb extends Contenedor {

    constructor() {
        super('carritos', {
            productos: { type: [], required: true }
        })
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoMongoDb
