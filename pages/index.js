import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import SearchForm from "../components/SearchForm";
import SearchIcon from "../icons/Search";
import Title from "../icons/Title";
import { GetProfiles, Search } from "./api/profiles";

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
        <SearchForm onSubmit={onSubmit} placeholder={"Cerca un poeta"} />
      </div>

      <div className="absolute bottom-0 p-8 w-full flex flex-row gap-8 overflow-hidden overflow-x-scroll elegant-scrollbar">
        {Profiles}
      </div>
    </div>
  );
}
