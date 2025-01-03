import mongoose from "mongoose";
import bcrypt from "bcrypt"
const salesRepresentativeSchema = new mongoose.Schema(
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
//pre hook before save in to db hashed the password
salesRepresentativeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.passowrd = await bcrypt.hash(this.passowrd, 10)
  next();
})


//password check is correct or not
salesRepresentativeSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.passowrd);
}


export const SalesRepresentative = mongoose.model("SalesRepresentative", salesRepresentativeSchema);