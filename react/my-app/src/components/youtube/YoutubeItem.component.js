import React from "react";

function YoutubeItem(props) {
  const { image, avatar, title, author } = props;
  console.log("Render youtube-item");
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{title}</h3>
          <h4 className="youtube-author">{author}</h4>
        </div>
      </div>
    </div>
  );
}
export default React.memo(YoutubeItem);
