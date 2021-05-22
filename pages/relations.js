import { useEffect, useState } from "react";
import RelationalProfile from "../components/RelationalProfile";
import { GetRelations } from "./api/relations";

const getX = (count) => {
  return 200 * count;
};

const Relations = () => {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    GetRelations().then((res) => setProfiles(res));
  }, []);

  let Profiles = [];
  if (profiles !== undefined) {
    Profiles = Object.values(profiles).map((item, index) => {
      return (
        <div key={index} className="z-10">
          <RelationalProfile profile={item} />
        </div>
      );
    });
  }

  return (
    <div className="under-nav">
      <div className="absolute flex flex-row mt-24 pl-24 pr-24 pb-16 gap-24">
        <div
          style={{ top: 45, width: getX(Profiles.length) }}
          className="absolute bg-white h-2"
        ></div>
        {Profiles}
      </div>
    </div>
  );
};

export default Relations;
