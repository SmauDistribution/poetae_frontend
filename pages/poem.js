import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetPoemBy } from "./api/poems";

function getChars(val) {
  if (val === undefined) return 0;

  let newVal = val.replace(" ", "");
  return newVal.length;
}

function getWords(val) {
  if (val === undefined) return 0;

  let words = val.split(" ");
  return words.length;
}

const Poem = withRouter((props) => {
  const [poem, setPoem] = useState({});
  const id = props.router.query.id;

  useEffect(() => {
    GetPoemBy(id).then((res) => setPoem(res[id]));
  }, []);

  let lines = [];
  if (poem.Contenuto !== undefined) {
    lines = poem.Contenuto.split("\n").map((line, index) => {
      return (
        <div className="flex flex-row gap-24 pl-4 bg-opacity-5 hover:bg-red-200 hover:bg-opacity-5">
          <span className="text-red-500 font-mono w-10">{index + 1}</span>
          <span>{line}</span>
        </div>
      );
    });
  }

  return (
    <div className="under-nav pl-24 pr-24">
      <div className="mt-8">
        <h1 className="font-bold text-4xl">{poem.Titolo}</h1>
        <span className="text-custom-gray">
          {poem.Nome} {poem.Cognome}
        </span>
        <p className="mt-4 text-lg">{poem.Descrizione}</p>
      </div>

      <div className="mt-24 bg-custom-darkgray rounded-lg font-serif">
        <div className="flex flex-row gap-1 font-mono pl-5 p-3 text-sm rounded-t-lg border-b border-custom-darkgray-900 text-custom-gray bg-opacity-10 bg-gray-500">
          <span>{getWords(poem.Contenuto)} parole,</span>
          <span>{getChars(poem.Contenuto)} caratteri</span>
        </div>
        <div className="h-lg overflow-hidden overflow-y-scroll elegant-scrollbar cursor-default">
          {lines}
        </div>
      </div>
    </div>
  );
});

export default Poem;
