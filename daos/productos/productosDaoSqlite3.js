import ContenedorSQL from "../../contenedores/ContenedorSQL.js.js"
import config from '../../config.js'

class ProductosDaoSQLite3 extends ContenedorSQL {

    constructor() {
        super(config.sqlite3, 'productos')
    }
}

export default ProductosDaoSQLite3