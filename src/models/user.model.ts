import { Schema, model } from "mongoose"

interface IUser {
    first_name: string,
    last_name: string,
    email: string,
    age: number,
    password: string,
    cart: any,
    role: 'user' | 'admin'
}

const UserSchema = new Schema<IUser>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: "Cart" },
    role: { type: String, enum: ['user', 'admin'] }
});

const User = model<IUser>("User", UserSchema);

export default User;