import Profile from "./Profile";

const HProfile = ({ profile }) => {
  return (
    <>
      <div className="mt-12 flex flex-row gap-6">
        <Profile
          name={profile.Nome}
          surname={profile.Cognome}
          path={profile.Immagine}
          size={2}
          disabled={true}
        />
        <div className="flex flex-col justify-center gap-2 text-4xl font-bold">
          <span>{profile.Nome}</span>
          <span>{profile.Cognome}</span>
        </div>
      </div>
      <div>
        {profile.Biografia !== undefined && profile.Biografia !== null && (
          <p className="text-gray-300 w-96 text-xl">"{profile.Biografia}"</p>
        )}
      </div>
    </>
  );
};

export default HProfile;
