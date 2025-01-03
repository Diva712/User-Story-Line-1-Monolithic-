import { SalesRepresentative } from "../model/salesRepresentative.model.js"
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createSalesRepresentative = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All Fields are required !!");

  }

  const existedSalesRepresentative = await SalesRepresentative.findOne({ email });
  if (existedSalesRepresentative) {
    throw new ApiError(400, "Sales Representative already present in DB");

  }

  const salesRep = new SalesRepresentative({
    name,
    email,
    password
  });

  const savedSalesRep = await salesRep.save();

  if (!savedSalesRep) {
    throw new ApiError(404,
      "Error during the created Task in Db");
  }

  return res.status(201).json(
    new ApiResponse(201, savedSalesRep, "Sales Representative creater !!")
  )
})

export { createSalesRepresentative }