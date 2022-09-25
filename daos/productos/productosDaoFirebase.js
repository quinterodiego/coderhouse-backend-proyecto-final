import ContenedorFirebase from "../../contenedores/contenedorFirebase.js.js"

class ProductosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('productos')
    }
}

export default ProductosDaoFirebase
