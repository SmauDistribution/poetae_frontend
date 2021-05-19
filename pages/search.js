import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Poems from "../components/Poems";
import SearchForm from "../components/SearchForm";
import Title from "../icons/Title";
import { FindPoem, GetPoems } from "./api/poems";

const Search = () => {
  const [poems, setPoems] = useState();

  const getPoems = () => {
    GetPoems().then((res) => {
      setPoems(res);
    });
  };

  const findPoem = (content) => {
    FindPoem(content).then((res) => {
      setPoems(res);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let content = e.target.content.value;

    if (content !== "") findPoem(content);
    else getPoems();
  };

  useEffect(() => {
    getPoems();
  }, []);

  return (
    <div className="under-nav">
      <div className="mt-20 flex flex-col items-center">
        <Title size={90} />
        <div className="mt-12">
          <SearchForm
            dark={true}
            onSubmit={onSubmit}
            placeholder={"Cerca un testo"}
          />
        </div>
        <div className="mt-4 flex flex-col text-center gap-2">
          <span>Oppure</span>
          <button className="poeate-link focus:outline-none">
            Carica un immagine
          </button>
        </div>
        <div className="w-full h-full">
          {poems !== undefined ? (
            <Poems poems={poems} />
          ) : (
            <div className="mt-28">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
