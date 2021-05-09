import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { auth, logout } from "./api/account";
import { GetBookmarks } from "./api/bookmarks";
import Poems from "../components/Poems";
import { useRouter } from "next/router";
import EmptyArea from "../components/EmptyArea";

const Account = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [poems, setPoems] = useState({});

  const account_logout = () => {
    logout();
    router.push({
      pathname: "/",
    });
  };

  useEffect(() => {
    auth().then((res) => {
      setUser(res);
    });
  }, [user]);

  useEffect(() => {
    GetBookmarks().then((res) => setPoems(res));
  }, [poems]);

  let poems_len = Object.keys(poems).length;

  return (
    <div className="under-nav">
      {user.Username ? (
        <div className="p-16">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-5xl mb-1">
              Benvenuto {user.Username}
            </h1>
            <small className="text-gray-300 text-lg">
              Questa è la tua area personale
            </small>
            <button
              onClick={account_logout}
              className="fixed bottom-10 right-10 w-24 font-serif poeate-btn"
            >
              Esci
            </button>
          </div>
          <div>
            {poems ? (
              [
                poems_len > 0 ? (
                  <Poems poems={poems} />
                ) : (
                  <EmptyArea message="Non ha salvato nessun segnalibro" />
                ),
              ]
            ) : (
              <Loading />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Account;
