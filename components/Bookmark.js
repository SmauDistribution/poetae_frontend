import { useEffect, useState } from "react";
import {
  AddBookmark,
  GetBookmarks,
  RemoveBookmark,
} from "../pages/api/bookmarks";
import BookmarkIcon from "../icons/Bookmark";

const Bookmark = ({ poem }) => {
  const [saved, setSaved] = useState(false);

  const onAction = () => {
    if (saved) {
      RemoveBookmark(poem.Id);
      setSaved(false);
    } else {
      AddBookmark(poem.Id);
      setSaved(true);
    }
  };

  useEffect(() => {
    GetBookmarks().then((res) => {
      Object.keys(res).map((item) => {
        if (poem.Id !== undefined) {
          if (item === poem.Id.toString()) {
            setSaved(true);
          }
        }
      });
    });
  }, [poem]);

  return (
    <span className="ml-auto cursor-pointer" onClick={onAction}>
      <BookmarkIcon fill={saved === true ? "#EF4444" : "gray"} />
    </span>
  );
};

export default Bookmark;
