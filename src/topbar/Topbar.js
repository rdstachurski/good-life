import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link className="link" to="/good-life">
            <li className="topListItem">Home</li>
          </Link>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {/* <li className="topListItem">Logout</li> */}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc5NTI0NTM1MTE1OTgxOTAz/the-life-and-times-of-the-ancient-greek-philosopher-socrates.jpg"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
