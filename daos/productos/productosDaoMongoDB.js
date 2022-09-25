import Contenedor from "../../contenedores/contenedorMongoDB.js";

class ProductosDaoMongoDB extends Contenedor {

    constructor() {
        super('productos', {
            code: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            thumbnail: { type: String, required: true },
            price: { type: Number, required: true },
            stock: { type: Number, required: true },
            timestamp: { type: Date, required: true },
        })
    }
}

export default ProductosDaoMongoDB
