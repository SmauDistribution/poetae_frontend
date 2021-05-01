function Profile({ path }) {
  return (
    <button className="bg-red-900 focus:outline-none cursor-pointer rounded-full w-24 h-24 text-center border-4 border-white shadow-xl flex-shrink-0 transition-colors duration-300 hover:border-red-500">
      <img className="rounded-full w-full h-full" src={path} />
    </button>
  );
}

//Giovanni verga ha le dimensioni sbilanciate

export default Profile;
