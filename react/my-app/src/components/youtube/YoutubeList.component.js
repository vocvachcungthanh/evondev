import "./css/Youtube.css";
import React from "react";
import { IMAGE_DEFAULT, YOUTUBE_DATA } from "../../Data";
import YoutubeItemComponent from "./YoutubeItem.component";

function YoutubeList(props) {
  const { children } = props;
  const { image, avatar } = IMAGE_DEFAULT;
  const renderYoutubeItem = (data) => {
    return data.map((item, index) => {
      return (
        <YoutubeItemComponent
          key={index}
          avatar={item.avatar || avatar}
          image={item.image || image}
          title={item.title}
          author={item.author}
        />
      );
    });
  };
  const renderYoutubeItemMemo = React.useMemo(() => {
    return renderYoutubeItem(YOUTUBE_DATA);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [YOUTUBE_DATA]);
  return (
    <div className="youtube-list">
      {children}
      {renderYoutubeItemMemo}
    </div>
  );
}
export default YoutubeList;
