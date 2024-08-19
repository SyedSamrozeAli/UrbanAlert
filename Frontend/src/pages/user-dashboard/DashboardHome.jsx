import { useSelector } from "react-redux";
import "../../styles/dashboard.css";
import { StatsCard } from "../../Components/StatsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DashboardHome = () => {
  //getting the user from the redux store
  const user = useSelector((state) => state.user.currentUser);
  const [latestReports, setLatestReports] = useState([]);
  const [mostVotedReports, setMostVotedReports] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let count = 0;
  const colors = ["#26353D", "#2E484B", "#446B61"];
  console.log(user);
  // const userReports = useSelector((state) => state.reports.currentUserReports);
  // const allReports = useSelector((state) => state.reports.allReports);
  // console.log(allReports);

  // console.log("USER Home: ", user);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/reports/latest-reports", {
        params: {
          quantity: 3,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setLatestReports(response.data.data.reports);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));

    setLoading(true);
    axios
      .get("/api/reports/most-voted-reports", {
        params: {
          quantity: 3,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setMostVotedReports(response.data.data.reports);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div className="home">
          <div className="home-heading-data">
            <div className="home-heading">
              <h1>Dashboard</h1>
            </div>
            <div className="home-msg">
              <p style={{ fontWeight: "500" }}>Welcome back, {user.username}</p>
            </div>
          </div>
          <div className="home-cards">
            <StatsCard
              image="/images/thumbsUp.png"
              heading="My Votes"
              sentence="Issues voted on"
              number={user.votes.length}
              total={20}
            />
            <StatsCard
              image="/images/resolved.png"
              heading="Resolved Issues"
              sentence="Issues resolved"
              number={40}
              total={50}
            />
            <div className="home-community-card">
              <div className="dashboard-card community-card">
                <div className="card-name">
                  <img
                    src="/images/community-2.png"
                    alt="community"
                    height={20}
                  />
                  <p>Community</p>
                </div>
                <div className="card-reports-list">
                  {loading && <h4>Loading...</h4>}
                  {error && <h4>Error in getting latest reports</h4>}
                  {latestReports.length > 0 ? (
                    latestReports.map((report) => (
                      <div className="card-single-report" key={report._id}>
                        <p className="card-title">
                          {report.title.slice(0, 20) + "..."}
                        </p>
                        <p className="card-username">
                          by {report.reporter_id.username}
                        </p>
                        <div className="card-img-container">
                          <img
                            src={
                              "http://localhost:8000/" +
                              report.reporter_id.profileImageURL
                            }
                            alt="profile img"
                            height={20}
                            className="card-img"
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No reports available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom-container">
            <div className="card-name">
              <img src="/images/upVotes.png" alt="Up Votes" height={20} />
              <p>Most Voted Reports</p>
            </div>
            <div className="bottom-card-reports-list">
              {loading && <p>Loading...</p>}
              {error && <p>Error in loading reports</p>}
              {console.log(mostVotedReports)}
              {mostVotedReports.length > 0 ? (
                mostVotedReports.map((report) => (
                  <div
                    className="bottom-card-single-report"
                    style={{ color: colors[count++] }}
                    key={report._id}
                  >
                    <p className="bottom-card-title">{report.title}</p>
                    <p className="bottom-card-voteCount">{report.voteCount}</p>
                  </div>
                ))
              ) : (
                <p>No reports available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
