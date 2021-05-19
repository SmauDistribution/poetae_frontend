import SearchIcon from "../icons/Search";

const SearchForm = ({ placeholder = "", onSubmit, dark = false }) => {
  let white_classes = "bg-white text-black";
  let dark_classes = "bg-custom-darkgray-900 text-white";

  return (
    <form className="flex flex-row gap-2" onSubmit={onSubmit}>
      <input
        className={
          (dark ? dark_classes : white_classes) +
          " rounded-full p-2 pl-4 font-semibold w-lg outline-none px-"
        }
        name="content"
        type="search"
        placeholder={placeholder}
      />
      <button className="poeate-btn">
        <SearchIcon isStatic={true} />
      </button>
    </form>
  );
};

export default SearchForm;
