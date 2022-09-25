import ContenedorSQL from "../../contenedores/contenedorSQL.js.js";
import config from './../../config.js'; 

class ProductosDaoMySql extends ContenedorSQL {

    constructor() {
        super(config.mysql, 'productos')
    }
}

export default ProductosDaoMySql
