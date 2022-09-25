import value from '../globales.js';
const admin = value.IS_ADMIN;

const isAdmin = (req, res, next) => {
    if (!admin) {     
        const err = { error : -1, descripcion: 'Ruta no autorizada' }
        next(err);
    } else {
        next();
    }
}

export default isAdmin;