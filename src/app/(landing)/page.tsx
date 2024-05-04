import { Medal } from "lucide-react";

export default function Landing() {
  return (
    <div className="content-landing">
      <div className="inner-content">
        <div className="badge">
          <Medal className="medal" />
          Easy Collaborative Software
        </div>
        <h1>Poard helps team move</h1>
        <div className="gradient-text">work forward.</div>
      </div>
      <div className="description">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Poard.
      </div>
      <button className="btn btn_medium landing-btn" type="button">
        Try Poard Free
      </button>
    </div>
  );
}
