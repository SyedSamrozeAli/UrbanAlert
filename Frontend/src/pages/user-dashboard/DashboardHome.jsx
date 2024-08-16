import { useSelector } from "react-redux";
import "../../styles/dashboard.css";
import { StatsCard } from "../../Components/StatsCard";

export const DashboardHome = () => {
  //getting the user from the redux store
  const user = useSelector((state) => state.user).currentUser;

  return (
    <>
      <div className="dashboard-container">
        <div className="home">
          <div className="home-heading">
            <h1>Dashboard</h1>
          </div>
          <div className="home-msg">
            <p style={{ fontWeight: "500" }}>Welcome back, {user.username}</p>
          </div>
          <div className="home-cards">
            <StatsCard
              image="/images/thumbsUp.png"
              heading="My Votes"
              sentence="Issues voted on"
              number={12}
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
              <div className="dashboard-card">
                <div className="card-name">
                  <img
                    src="/images/community-2.png"
                    alt="community"
                    height={20}
                  />
                  <p>Community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-footer"></div>
        </div>
      </div>
    </>
  );
};
