import mongoose from 'mongoose';

const productoShema = mongoose.Schema({
    code: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    datetime: { type: Date, required: true },
});

export default mongoose.model('Productos', productoShema);