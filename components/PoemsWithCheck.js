import Poems from "./Poems";

const PoemsWithCheck = ({ poems }) => {
  return (
    <div>
      {poems.length !== 0 ? (
        <Poems poems={poems} />
      ) : (
        <div className="mt-28">
          <center>
            <h1>Nessun risultato</h1>
          </center>
        </div>
      )}
    </div>
  );
};

export default PoemsWithCheck;
