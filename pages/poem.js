import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import { GetPoemBy } from "./api/poems";

const Poem = withRouter((props) => {
  const [poem, setPoem] = useState({});
  const id = props.router.query.id;

  useEffect(() => {
    GetPoemBy(id).then((res) => setPoem(res[id]));
  }, []);

  return (
    <div className="under-nav pl-24 pr-24">
      <div className="mt-8">
        <h1 className="font-bold text-4xl">{poem.Titolo}</h1>
        <span className="text-custom-gray">
          {poem.Nome} {poem.Cognome}
        </span>
        <p className="mt-4 text-lg">{poem.Descrizione}</p>
      </div>
      <TextEditor poem={poem} />
    </div>
  );
});

export default Poem;
