import { Schema, model, models } from 'mongoose';
import type { Types, Document } from 'mongoose';

// Interface para a tipagem do documento Property
export interface IProperty extends Document {
  _id: Types.ObjectId;
  owner: Types.ObjectId;
  name: string;
  type: string;
  description: string;
  location?: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities?: string[];
  rates?: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  selleter_info?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  images?: string[];
  is_featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const PropertySchema = new Schema<IProperty>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [{ type: String }],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    selleter_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = models.Property ?? model('Property', PropertySchema);

export default Property;
