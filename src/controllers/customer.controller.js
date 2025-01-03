import { Customer } from "../model/customer.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createCustomer = asyncHandler(async (req, res) => {

  const { name, email, phone, salesRepresentativeId } = req.body;

  const customer = new Customer({
    name,
    email,
    phone,
    salesRepresentative: salesRepresentativeId,
  })

  const savedCustomer = await customer.save();
  if (!savedCustomer) {
    throw new ApiError(400, "Error during creating customer in DB!!");
  }

  return res.status(201).json(
    new ApiResponse(201, savedCustomer, "Customer created sucessfully !!")
  )
})

export { createCustomer }