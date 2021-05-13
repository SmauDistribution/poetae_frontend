import { useRouter } from "next/router";

function Profile({ id, name, surname, path, size = 1, disabled = false }) {
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
        (size == 0
          ? "w-16 h-16 text-xl"
          : [size === 2 ? "w-32 h-32 text-5xl" : "w-24 h-24 text-3xl"]) +
        " bg-red-900 focus:outline-none rounded-full text-center border-4 border-white shadow-xl flex-shrink-0 transition-colors duration-30 " +
        (disabled ? "cursor-default" : "cursor-pointer hover:border-red-500")
      }
      disabled={disabled}
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
