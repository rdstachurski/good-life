import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, title, desc }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="/post">
            {title}
          </Link>
        </span>
        <span className="postDate">one hour ago</span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
  );
}
