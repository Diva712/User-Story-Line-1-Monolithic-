import mongoose from "mongoose";

const salesRepresentative = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passowrd: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);


export const SalesRepresentative = mongoose.model("SalesRepresentative", salesRepresentative);