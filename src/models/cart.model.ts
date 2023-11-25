import { Schema, model } from "mongoose";

interface ICart {
    products: [
        {
            product: any,
            quantity: number
        }
    ]
}

const CartSchema = new Schema<ICart>({
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number },
            _id: false
        }
    ]
})

CartSchema.pre('findOne', function () {
    this.populate('products')
})

const Cart = model<ICart>("Cart", CartSchema)

export default Cart