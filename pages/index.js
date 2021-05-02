import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import SearchIcon from "../icons/Search";
import Title from "../icons/Title";
import { GetProfiles, Search } from "./api/profiles";

//TODO: QUANDO CERCHI E VIENE FUORI UN PROFILO SENZA IMMAGINE SI VEDE MALE...SISTEMA

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let content = e.target.content.value;
    if (content !== "") Search(content).then((res) => setProfiles(res));
    else GetProfiles().then((res) => setProfiles(res));
  };

  useEffect(() => {
    GetProfiles().then((res) => setProfiles(res));
  }, []);

  let Profiles = Object.values(profiles).map((item) => {
    return <Profile key={item.Id} id={item.Id} path={item.Immagine} />;
  });

  return (
    <div
      className="under-nav bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: "url('img/background.jpg')" }}
    >
      <div className="flex flex-col mt-8 p-4 items-center">
        <Title />
        <i className="mt-3 mb-16">
          <small className="text-custom-gray text-3xl text-opacity-80">
            Conosci i tuoi poeti
          </small>
        </i>
        <form className="flex flex-row gap-2" onSubmit={onSubmit}>
          <input
            className="bg-white rounded-full p-2 font-semibold w-lg outline-none px-4 text-black"
            name="content"
            type="search"
            placeholder="Cerca un poeta"
          />
          <button className="bg-red-600 p-2 rounded-full text-center outline-none transition-colors hover:bg-red-700 focus:outline-none">
            <SearchIcon isStatic={true} />
          </button>
        </form>
      </div>

      <div className="absolute bottom-0 p-8 w-full flex flex-row gap-8 overflow-hidden overflow-x-scroll elegant-scrollbar">
        {Profiles}
      </div>
    </div>
  );
}
