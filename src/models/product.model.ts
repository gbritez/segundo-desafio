import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from 'mongoose-paginate-v2'

export interface IProduct extends Document {
    title: string;
    description: string;
    price: number;
    code: number;
    stock: number;
    thumbnail: string;
    category: string;
}

const ProductSchema = new Schema<IProduct>({
    title: { type: String, required: true },
    code: { type: Number, required: true, unique: true },
    category: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, index: true },
    thumbnail: { type: String, required: true },
})

ProductSchema.plugin(paginate)

const Product = model<IProduct, PaginateModel<IProduct>>("Product", ProductSchema)

export default Product