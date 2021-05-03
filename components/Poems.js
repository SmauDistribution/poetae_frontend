import { useRouter } from "next/router";

const Poems = ({ poems }) => {
  const router = useRouter();
  const openPoem = (id) => {
    router.push({
      pathname: "/poem",
      query: {
        id: id,
      },
    });
  };

  let Poems = [];
  if (poems !== undefined && poems != null) {
    Poems = Object.values(poems).map((item) => {
      return (
        <div
          key={item.Id}
          className="w-80 h-60 bg-custom-darkgray p-8 rounded-xl flex flex-col gap-3 cursor-pointer transition-colors hover:bg-custom-darkgray-900"
          onClick={() => openPoem(item.Id)}
        >
          <h1 className="font-bold">{item.Titolo}</h1>
          <p>{item.Descrizione.substring(0, 100)}...</p>
        </div>
      );
    });
  }

  return (
    <div className="w-full p-12 grid grid-cols-3 place-items-center mt-12">
      {Poems}
    </div>
  );
};

export default Poems;
