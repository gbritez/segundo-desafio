import { Schema, model } from "mongoose";

interface ICart {

}

const CartSchema = new Schema<ICart>({

})

const Cart = model<ICart>("Cart", CartSchema)

export default Cart