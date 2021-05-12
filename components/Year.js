const Year = ({ index, year, top }) => {
  return (
    <div
      style={{
        top: top,
        left: 96,
      }}
      className="absolute bg-red-500 pl-8 pr-8 p-2 rounded-br-xl rounded-tl-xl z-10 border-4 border-white"
    >
      <span className="text-2xl">{year}</span>
    </div>
  );
};

export default Year;
