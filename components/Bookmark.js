import { useEffect, useState } from "react";
import {
  AddBookmark,
  GetBookmarks,
  RemoveBookmark,
} from "../pages/api/bookmarks";
import BookmarkIcon from "../icons/Bookmark";
import AccountForm from "./Account";
import { GetToken } from "../pages/api/account";

const Bookmark = ({ poem }) => {
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(false);

  const onAction = () => {
    if (GetToken() === null) {
      setVisible(true);
    } else {
      if (saved) {
        RemoveBookmark(poem.Id);
        setSaved(false);
      } else {
        AddBookmark(poem.Id);
        setSaved(true);
      }
    }
  };

  useEffect(() => {
    GetBookmarks()
      .then((res) => {
        Object.keys(res).map((item) => {
          if (poem.Id !== undefined) {
            if (item === poem.Id.toString()) {
              setSaved(true);
            }
          }
        });
      })
      .catch((err) => {});
  }, [poem]);

  return (
    <>
      <AccountForm
        visible={visible}
        setVisible={setVisible}
        message="Bisogna avere un account per salvare questo testo nei segnalibri."
      />
      <span className="ml-auto cursor-pointer" onClick={onAction}>
        <BookmarkIcon fill={saved === true ? "#EF4444" : "gray"} />
      </span>
    </>
  );
};

export default Bookmark;
