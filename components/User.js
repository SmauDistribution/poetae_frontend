const UserIcon = () => {
  let username = sessionStorage.getItem("username").charAt(0);

  return (
    <div className="bg-white text-red-400  w-6 h-6 flex flex-col items-center justify-center rounded-full transition-colors hover:bg-red-400 hover:text-white">
      <span className="text-xl font-mono font-bold ">{username}</span>
    </div>
  );
};

export default UserIcon;
