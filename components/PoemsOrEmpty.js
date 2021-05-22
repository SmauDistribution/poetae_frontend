import EmptyArea from "./EmptyArea";
import Poems from "./Poems";

const PoemsOrEmpty = ({ poems }) => {
  let poems_len = Object.keys(poems).length;
  return (
    <div>
      {poems_len > 0 ? (
        <Poems poems={poems} />
      ) : (
        <EmptyArea message="Non ha salvato nessun segnalibro" />
      )}
    </div>
  );
};

export default PoemsOrEmpty;
