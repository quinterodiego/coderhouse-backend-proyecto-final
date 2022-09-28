import Contenedor from "../../contenedores/ContenedorMongoDB.js"

class CarritosDaoMongoDb extends Contenedor {

    constructor() {
        super('carritos', {
            timestamp: { type: String, required: true },
            productos: { type: [], required: true }
        })
    }
}

export default CarritosDaoMongoDb