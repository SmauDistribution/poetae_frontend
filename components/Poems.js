import { useRouter } from "next/router";
import PoemCard from "./PoemCard";

const Poems = ({ poems }) => {
  const router = useRouter();

  let Poems = [];
  if (poems !== undefined && poems != null) {
    Poems = Object.values(poems).map((item) => {
      return <PoemCard key={item.Id} item={item} />;
    });
  }

  return (
    <div className="flex flex-row flex-wrap gap-8 w-full h-auto p-12">
      {Poems}
    </div>
  );
};

export default Poems;
