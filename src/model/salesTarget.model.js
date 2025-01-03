import mongoose from "mongoose";

const salesTargetSchema = new mongoose.Schema({
  salesRepresentative: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SalesRepresentative',
    required: true,
  },
  targetValue: {
    type: Number,
    required: true
  },
  achievedValue: {
    type: Number,
    default: 0
  }
}, { timestamps: true })


export const SalesTarget = mongoose.model('SalesTarget', salesTargetSchema);