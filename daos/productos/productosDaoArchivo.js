import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js.js"

class ProductosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('productos.json')
    }
}

export default ProductosDaoArchivo
