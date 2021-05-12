import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import BornData from "../components/BornData";
import HProfile from "../components/HProfile";
import Loading from "../components/Loading";
import Paths from "../components/Paths";
import Poems from "../components/Poems";
import { GetPoem } from "./api/poems";
import { GetProfile } from "./api/profiles";

const Profile = withRouter((props) => {
  const id = props.router.query.id;
  const [profile, setProfile] = useState();
  const [poems, setPoems] = useState();

  useEffect(() => {
    GetProfile(props.router.query.id).then((res) => setProfile(res[id]));
    GetPoem(id).then((res) => setPoems(res));
  }, [id]);

  return (
    <div className="under-nav flex flex-col items-center gap-6">
      {profile !== undefined && poems !== undefined ? (
        <>
          <HProfile profile={profile} />
          <BornData profile={profile} />
          <Paths profile={profile} />
          <Poems poems={poems} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
});

export default Profile;
