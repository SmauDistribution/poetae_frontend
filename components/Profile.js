import { useRouter } from "next/router";

function Profile({ id, name, surname, path }) {
  const router = useRouter();
  const openProfile = () => {
    router.push({
      pathname: "/profile",
      query: {
        id: id,
      },
    });
  };

  return (
    <button
      onClick={openProfile}
      className="bg-red-900 focus:outline-none cursor-pointer rounded-full w-24 h-24 text-center border-4 border-white shadow-xl flex-shrink-0 transition-colors duration-300 hover:border-red-500"
    >
      {path !== "" ? (
        <img className="rounded-full w-full h-full" src={path} />
      ) : (
        <div>
          {name !== undefined &&
            name !== null &&
            surname !== undefined &&
            surname !== null && (
              <span className="text-white text-3xl">
                {name.charAt(0)} {surname.charAt(0)}
              </span>
            )}
        </div>
      )}
    </button>
  );
}

export default Profile;
