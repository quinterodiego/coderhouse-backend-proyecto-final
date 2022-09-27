import Contenedor from "../../contenedores/ContenedorMongoDB.js"

class CarritosDaoMongoDb extends Contenedor {

    constructor() {
        super('carritos', {
            productos: { type: [], required: true }
        })
    }
}

export default CarritosDaoMongoDb