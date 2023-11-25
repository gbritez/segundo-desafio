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
    first_name: { type: String, },
    last_name: { type: String, },
    email: { type: String, unique: true },
    age: { type: Number },
    password: { type: String, },
    cart: { type: Schema.Types.ObjectId, ref: "Cart" },
    role: { type: String, enum: ['user', 'admin'] }
});

const User = model<IUser>("User", UserSchema);

export default User;