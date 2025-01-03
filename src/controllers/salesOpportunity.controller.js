import { SalesOpportunity } from "../model/salesOpportunity.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createSalesOpportunity = asyncHandler(async (req, res) => {
  const { customer, salesRepresentative, dealValue, description } = req.body;

  if (!customer ||
    !salesRepresentative || !dealValue || !description
  ) {
    throw new ApiError(400, "All fields are required !!");
  }

  const opportunity = new SalesOpportunity({
    customer,
    salesRepresentative,
    dealValue,
    description,
  })

  const savedOpportunity = await opportunity.save();
  if (!savedOpportunity) {
    throw new ApiError(404, "Error during create a saleOpportunity in db");
  }

  return res.status(201).json(
    new ApiResponse(201, savedOpportunity, "Salesopportunity created !!")
  )
})



const updateSalesOpportunity = asyncHandler(async (req, res) => {

  const { id } = req.params;
  const { dealValue, status } = req.body;

  const opportunity = await SalesOpportunity.findByIdAndUpdate(
    id,
    {
      dealValue,
      status,
      updatedAt: Date.now()
    },
    {
      new: true
    }
  )


  if (!opportunity) {
    throw new ApiError(404, "Error: during update the salesOpportunity")
  }

  return res.status(200).json(
    new ApiResponse(200, opportunity, "sales opportunity updated !!")
  )
})


export { createSalesOpportunity, updateSalesOpportunity }