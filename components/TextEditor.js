import Bookmark from "./Bookmark";

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

const TextEditor = ({ poem }) => {
  let lines = [];
  if (poem.Contenuto !== undefined) {
    lines = poem.Contenuto.split("\n").map((line, index) => {
      return (
        <div
          key={index}
          className="flex flex-row gap-24 pl-4 bg-opacity-5 hover:bg-red-200 hover:bg-opacity-5"
        >
          <span className="text-red-500 font-mono w-10">{index + 1}</span>
          <span>{line}</span>
        </div>
      );
    });
  }

  return (
    <div className="mt-24 bg-custom-darkgray rounded-lg font-serif">
      <div className="flex flex-row items-center gap-1 font-mono pl-5 p-3 text-sm rounded-t-lg border-b border-custom-darkgray-900 text-custom-gray bg-opacity-10 bg-gray-500">
        <span>{getWords(poem.Contenuto)} parole,</span>
        <span>{getChars(poem.Contenuto)} caratteri</span>
        <Bookmark poem={poem} />
      </div>
      <div className="h-lg overflow-hidden overflow-y-scroll elegant-scrollbar cursor-default">
        {lines}
      </div>
    </div>
  );
};

export default TextEditor;
