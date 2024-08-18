import reportModel from "../model/report-model.js";
import { response } from "../service/response.js";
import { parse } from "url";
async function handleGetAllReports(req, res) {
  try {
    const allReports = await reportModel
      .find()
      .populate({ path: "reporter_id", select: "username profileImageURL" });

    if (allReports != null) {
      return res.send(
        response(
          true,
          200,
          "All reports fetched successfully",
          "reports",
          allReports
        )
      );
    } else {
      return res.send(response(false, 400, "No reports to show"));
    }
  } catch (error) {
    return res.send(response(false, 400, "Unable to fetch reports"));
  }
}

async function handleGetLatestReports(req, res) {
  try {
    const quantity = parse(req.url, true).query.quantity;

    // Getting only the latest records acc to quantity required
    const latestReports = await reportModel
      .find()
      .sort({ createdAt: -1 })
      .limit(quantity)
      .select("title reporter_id")
      .populate({ path: "reporter_id", select: "username profileImageURL" });

    if (latestReports != null)
      return res.send(
        response(
          true,
          200,
          "Latest Reports fetched successfully",
          "reports",
          latestReports
        )
      );
    else return res.send(response(false, 400, "No reports to show"));
  } catch (error) {
    return res.send(response(false, 400, "Unable to fetch reports"));
  }
}

async function handleGetMostVotedReports(req, res) {
  try {
    const quantity = parse(req.url, true).query.quantity;

    const mostVotedReports = await reportModel.aggregate([
      // Add a 'voteCount' field that holds the size of the votes array
      {
        $addFields: {
          voteCount: { $size: "$votes" },
        },
      },
      // Sort by 'voteCount' in descending order
      { $sort: { voteCount: -1 } },
      // Limit the results to the top N reports
      { $limit: 3 },
      {
        // this works like select() function, you need to pass the keys required with '1' value,the values which we dont want we can pass set 0
        $project: {
          title: 1,
          voteCount: 1,
        },
      },
    ]);
    if (mostVotedReports.length > 0) {
      return res.send(
        response(
          true,
          200,
          "Most Voted Reports Fetched successfully",
          "reports",
          mostVotedReports
        )
      );
    } else {
      return res.send(response(false, 400, "No reports to show"));
    }
  } catch (error) {
    return res.send(
      response(false, 400, "Unable to fetch reports", "error", error.message)
    );
  }
}
export {
  handleGetAllReports,
  handleGetLatestReports,
  handleGetMostVotedReports,
};
