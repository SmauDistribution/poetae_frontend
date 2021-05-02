const Paths = ({ profile }) => {
  let percorsi = [];
  if (profile.Percorsi !== undefined && profile.Percorsi !== null) {
    percorsi = Object.values(profile.Percorsi).map((item) => {
      return (
        <div
          className="bg-red-700 rounded-full text-center p-1 pl-4 pr-4 font-serif"
          key={item.Id}
        >
          <span>{item.Descrizione}</span>
        </div>
      );
    });
  }

  return (
    <div className="flex flex-row flex-wrap gap-2 w-96 justify-center">
      {percorsi}
    </div>
  );
};

export default Paths;
