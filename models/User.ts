import {Schema, model, models} from 'mongoose';
import type {Types, Document} from 'mongoose';

// Interface para a tipagem do documento User
export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  username: string;
  image?: string;
  bookmarks?: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Definição do Schema do User
const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      unique: [true, 'Username already taken'],
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [{type: Schema.Types.ObjectId, ref: 'Property'}],
  },
  {
    timestamps: true,
  }
);

const User = models.User ?? model('User', UserSchema);

export default User;
