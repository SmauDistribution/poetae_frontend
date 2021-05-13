import { useRouter } from "next/router";

function Profile({ id, name, surname, path, isSmall = false }) {
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
      className={
        (isSmall ? "w-16 h-16 text-xl" : "w-24 h-24 text-3xl") +
        " bg-red-900 focus:outline-none cursor-pointer rounded-full text-center border-4 border-white shadow-xl flex-shrink-0 transition-colors duration-300 hover:border-red-500"
      }
    >
      {path !== "" ? (
        <img className="rounded-full w-full h-full" src={path} />
      ) : (
        <div>
          {name !== undefined &&
            name !== null &&
            surname !== undefined &&
            surname !== null && (
              <span className="text-white">
                {name.charAt(0)} {surname.charAt(0)}
              </span>
            )}
        </div>
      )}
    </button>
  );
}

export default Profile;
