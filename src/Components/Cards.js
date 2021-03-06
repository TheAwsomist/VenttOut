import { useEffect, useState } from "react";
import "../styles/Cards.css";

const NewsFeedCard = ({
  genusername,
  headline,
  subtext,
  image,
  likes,
  comments,
  share,
  time,
  date,
}) => {
  const [cardlength, SetLength] = useState(false);
  const [screensize,SetSize] = useState(false);

  useEffect(() => {
    if (subtext.split(" ").length >= 20){
      SetLength(true);
    }
    else{
      SetLength(false);
    }
    console.log(cardlength);
    console.log(subtext.split(" ").length);
  }, []);


  return (
    <div className="NewsFeedCard">
      <div className="upperpart">
        <div className="upperright">
          <div className="avatar"></div>
          <div className="Nametags">
            <h3>{genusername}</h3>
            <p className="timestamp">
              {time} .{date}
            </p>
          </div>
        </div>
        <div className="flag">
          <div className="flagicon"></div>
          <p className="flagtag"><span className="showhide">Flag</span></p>
        </div>
      </div>
      <div className="middlepart">
        <h1>{headline}</h1>
        <p> {cardlength?subtext.split(" ").splice(0,20).join(" ")+". . . .":subtext}</p>
        {cardlength && (
          <div className="readmore">
            <p>Read More{">"}</p>
          </div>
        )}
      </div>
      <div className="lowerpart">
        <div className="postoption" style={{ marginLeft: "0px" }}>
          <div className="Upvote"></div>
          <div className="Num" style={{ margin: "0px 10px" }}>
            {likes}
          </div>
          <div className="Downvote"></div>
        </div>
        <div className="postoption">
          <div className="Comment"></div>
          <div className="Num" style={{ marginLeft: "12px" }}>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>
              {comments}
            </span>{" "}
            <span className="showhide">Comments</span>
          </div>
        </div>
        <div className="postoption">
          <div className="Share"></div>
          <div className="Num" style={{ marginLeft: "12px" }}>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>
              {share}
            </span>{" "}
            <span className="showhide">Shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ post, likes, comments, share, time, date }) => {
  return (
    <div className="ProfileCard">
      <div className="upperpart">
        <p className="timestamp">
          {time}
          {date}12:30 PM . Apr 21, 2021
        </p>
      </div>
      <div className="middlepart">
        <h3>
          {post}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          minus voluptates aliquam sint magni quis quo amet perferendis nihil
          ullam, debitis error provident ex totam beatae soluta doloremque
          voluptas? Minus.
        </h3>
      </div>
      <div className="lowerpart">
        <div className="tags">
          <p className="taghead">Likes</p>
          <p className="tagdata">{likes}2.8k</p>
        </div>
        <div className="tags">
          <p className="taghead">Comments</p>
          <p className="tagdata">{comments}7</p>
        </div>
        <div className="tags">
          <p className="taghead">Shares</p>
          <p className="tagdata">{share}64</p>
        </div>
      </div>
    </div>
  );
};

export { ProfileCard, NewsFeedCard };
