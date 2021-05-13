import Profile from "./Profile";

const getY = (count) => {
  return 80 * count;
};

const getSubprofiles = (profile) => {
  let subProfiles = Object.values(profile.Relazioni).map((item) => {
    return (
      <div className="z-10">
        <Profile
          id={item.Id}
          name={item.Nome}
          surname={item.Cognome}
          path={item.Immagine}
          size={0}
        />
      </div>
    );
  });

  return subProfiles;
};

const RelationalProfile = ({ profile }) => {
  let subProfiles = getSubprofiles(profile);

  return (
    <div>
      <div>
        <Profile
          id={profile.Id}
          name={profile.Nome}
          surname={profile.Cognome}
          path={profile.Immagine}
        />
      </div>
      <div className="mt-4 flex flex-col items-center gap-4">
        <div
          style={{ top: 95, height: getY(subProfiles.length) }}
          className="absolute bg-white w-2"
        ></div>
        {subProfiles}
      </div>
    </div>
  );
};

export default RelationalProfile;
