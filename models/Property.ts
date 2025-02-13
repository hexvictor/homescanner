import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

const Property = models.Property ?? model("Property", PropertySchema);

export default Property;
