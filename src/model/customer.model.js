import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    salesRepresentative: {
      type: mongoose.Schema.Type.ObjecId,
      ref: 'SalesRepresentative',
      required: true,
    }

  },
  {
    timestamps: true
  }
)

export const Customer = mongoose.model("Customer", customerSchema);