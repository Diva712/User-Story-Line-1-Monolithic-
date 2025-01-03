import { SalesActivity } from "../model/salesActivity.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createSalesActivity = asyncHandler(async (req, res) => {

  const { salesRepresentative, activityType, description } = req.body;
  const activity = new SalesActivity({
    salesRepresentative,
    activityType,
    description,
  })

  const savedActivity = await activity.save();

  if (!savedActivity) {
    throw new ApiError(400, "Error during creating activity!!")
  }

  return res.status(201).json(
    new ApiResponse(201, savedActivity, "Sales Activity created")
  )

})



const getSalesActivites = asyncHandler(async (req, res) => {
  const { salesRepresentative } = req.query;
  const activites = await SalesActivity.find({ salesRepresentative });

  if (!activites) {
    throw new ApiError(404, "Sales activites notfound!!");
  }

  return res.status(200).json(
    new ApiResponse(200, activites, "All activites are fetched !!")
  )
})


export { createSalesActivity, getSalesActivites };
