import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post
        img="https://blogs.baruch.cuny.edu/eng2800hmwa2015fall/files/2015/12/Gilgamesh_Leischker_051.png"
        title="My Life"
        desc="“Why, dear friend, do you speak like a coward?
        What you just said is unworthy of you, it grieves my heart.
        We are not gods, we cannot ascend to heaven. No, we are mortal men.
        Only the gods live forever. Our days are few in number, and whatever
        we achieve is a puff of wind. Why be afraid then, since sooner or
        later death must come? Where is the courage you have always had?
        If I die in the forest on this great adventure, won’t you be ashamed
        when people say, ‘Gilgamesh met a hero’s death battling the monster
        Humbaba. And where was Enkidu? He was safe at home!’ You
        were raised in the mountains, with your own hands you have killed
        marauding lions and wolves, you are brave, your heart has been tested
        in combat. But whether you come along or not, I will cut down the
        tree, I will kill Humbaba, I will make a lasting name for myself, I will
        stamp my fame on men’s minds forever"
      />
      <Post
        img="https://www.learner.org/wp-content/uploads/2019/05/invitation-to-world-literature-epic-of-gilgamesh-2019-09-19-at-1.47.09-PM-death-of-enkidu.png"
        title="A dream"
        desc="“Beloved brother, last night I had a terrifying
        dream. I dreamed that we had offended the gods, they met in council
        and Anu said, ‘They have slaughtered the Bull of Heaven and killed
        Humbaba, watchman of the Cedar Forest. Therefore one of the two
        must die.’ Then Enlil said ‘Enkidu, not Gilgamesh, is the one
        who must die.’”"
      />
      <Post
        img="https://ychef.files.bbci.co.uk/976x549/p07qsmyr.jpg"
        title="Questions"
        desc="“Now perhaps someone here might ask: Don't you have the
        least bit of regret, Socrates, for pursuing a course in life that
        has brought you now to the brink of the punishment of
        death? I would be quite right to answer this with: You have
        it all wrong, my good man, if you think that any of us - any of
        us of even the least bit of worth - must take the risk of living or
        dying into consideration whenever we set out on a course of
        action. The only thing we ever need to consider is whether or
        not we are doing something right or wrong, or whether we are
        performing the actions of a good man or bad. According to your
        54
        reasoning, the heroic demi-gods who died at Troy must have
        been worth very little - in particular the son of the sea­
        goddess Theti”"
      />
      <Post
        img="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/19/10/persepolis-0.jpg?width=982&height=726&auto=webp&quality=75"
        title="Self-understanding"
        desc="“To educate myself, I had to understand everything. 
        Starting with myself,me,marji, the woman.
         So i threw myself into reading my mother's favorite book.”"
      />
      <Post
        img="https://images.theconversation.com/files/428762/original/file-20211027-17-1hjzmvi.jpg?ixlib=rb-1.1.0&rect=16%2C0%2C5431%2C3620&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        title="Education"
        desc="“I know you're still young but I want you to understand and learn this now. 
        Marriage can wait, education cannot. You're a very very bright girl. Truly you are. 
        You can be anything you want Laila. I know this about you. 
        And I also know that when this war is over Afghanistan is going to need you as much as its men 
        maybe even more. Because a society has no chance of success if its women are uneducated Laila. 
        No chance.” "
      />
    </div>
  );
}
