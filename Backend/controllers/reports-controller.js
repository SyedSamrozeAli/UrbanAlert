import reportModel from "../model/report-model.js";
import { response } from "../service/response.js";

async function handleGetAllReports(req, res) {
    try {
        const allReports = await reportModel.find().populate({ path: "reporter_id", select: "username profileImageURL" });

        if (allReports != null) {
            return res.send(response(true, 200, "All reports fetched successfully", "reports", allReports));
        } else {
            return res.send(response(false, 400, "No reports to show"));
        }
    } catch (error) {
        return res.send(response(false, 400, "Unable to fetch reports"));

    }
};

export { handleGetAllReports };