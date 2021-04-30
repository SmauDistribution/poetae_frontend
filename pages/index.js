import SearchIcon from "../icons/Search";
import Title from "../icons/Title";

export default function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };

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
            className="bg-white rounded-full p-2 font-semibold w-lg outline-none px-4"
            type="search"
            placeholder="Cerca un poeta"
          />
          <button className="bg-red-600 p-2 rounded-full text-center outline-none transition-colors hover:bg-red-700">
            <SearchIcon isStatic={true} />
          </button>
        </form>
      </div>
    </div>
  );
}
