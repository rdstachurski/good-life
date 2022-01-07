import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://blogs.baruch.cuny.edu/eng2800hmwa2015fall/files/2015/12/Gilgamesh_Leischker_051.png"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          My Life
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Gilgamesh</b>
          </span>
          <span>1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          “Why, dear friend, do you speak like a coward? What you just said is
          unworthy of you, it grieves my heart. We are not gods, we cannot
          ascend to heaven. No, we are mortal men. Only the gods live forever.
          Our days are few in number, and whatever we achieve is a puff of wind.
          Why be afraid then, since sooner or later death must come? Where is
          the courage you have always had? If I die in the forest on this great
          adventure, won’t you be ashamed when people say, ‘Gilgamesh met a
          hero’s death battling the monster Humbaba. And where was Enkidu? He
          was safe at home!’ You were raised in the mountains, with your own
          hands you have killed marauding lions and wolves, you are brave, your
          heart has been tested in combat. But whether you come along or not, I
          will cut down the tree, I will kill Humbaba, I will make a lasting
          name for myself, I will stamp my fame on men’s minds forever
        </p>
      </div>
    </div>
  );
}
