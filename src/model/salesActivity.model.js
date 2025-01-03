import mongoose from "mongoose";

const salesActivitySchema = new mongoose.Schema({
  salesRepresentative: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SalesRepresentative',
    required: true
  },
  activityType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})


export const SalesActivity = mongoose.model("SalesActivity", salesActivitySchema);

