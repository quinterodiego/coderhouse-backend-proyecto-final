import CarritosDaoSQL from "./carritosDaoSQL.js"
import config from '../../config.js'

class CarritosDaoMariaDb extends CarritosDaoSQL {

    constructor() {
        super(config.mysql, config.mysql)
    }
}

export default CarritosDaoMariaDb
