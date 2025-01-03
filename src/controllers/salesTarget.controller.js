import { SalesTarget } from "../model/salesTarget.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const creatSalesTarget = asyncHandler(async (req, res) => {
  const { salesRepresentative, targetValue } = req.body;

  if (!salesRepresentative || !targetValue) {
    throw new ApiError(400, "All field are requried !!!")
  }
  const salesTarget = new SalesTarget({
    salesRepresentative,
    targetValue
  })

  const savedTarget = await salesTarget.save();

  if (!savedTarget) {
    throw new ApiError(400, "Error : during creating sales target")
  }

  return res.status(201).json(
    new ApiResponse(201, salesTarget, "Sales Target is created !!")
  )
})

const getSalesTargets = asyncHandler(async (req, res) => {
  const { salesRepresentative } = req.query;
  const targets = await SalesTarget.find({ salesRepresentative });
  if (!targets) {
    throw new ApiError(404, "Target not found !!")
  }

  return res.status(200).json(
    new ApiResponse(200, targets, "All Targets fetched Succesfully !!")
  )
})


const updateSalesTarget = asyncHandler(async (req, res) => {

  const { id } = req.params;
  const { achievedValue } = req.body;

  const target = await SalesTarget.findByIdAndUpdate(
    id,
    { achievedValue },
    {
      new: true
    }
  )

  if (!target) {
    throw new ApiError(404, "Target not found !!")
  }

  return res.status(200).json(
    new ApiResponse(200, target, "Target updated succesfully!!")
  )
})


export { creatSalesTarget, getSalesTargets, updateSalesTarget };


