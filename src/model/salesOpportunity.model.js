import mongoose from "mongoose";

const salesOpportunitySchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },

  salesRepresentative: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SalesRepresentative',
    required: true,
  },

  dealValue: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    default: "Open",
    enum: ["Open", "Closed-Won", "Closed-Lost"],
  },
  description: {
    type: String,
  },

}, {
  timestamps: true
})


export const SalesOpportunity = mongoose.model('SalesOpportunity', salesOpportunitySchema);
