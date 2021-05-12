import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { GetYears } from "./api/dateline";

const SPACING = 150;

const getX = (count) => {
  return count === 0 ? 104 : 300 + 90 * count;
};

const getLenght = (count) => {
  return count === 0 ? 0 : SPACING * count + 200;
};

const getY = (index) => {
  return index * SPACING + 130;
};

const Timeline = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    GetYears().then((res) => {
      setYears(res);
    });
  }, []);

  let sortedYears = Object.values(years).sort((a, b) => a.Anno - b.Anno);

  //TODO: Fai più piccoli i profile
  let lines = [];
  if (years !== undefined && years !== null && years !== [])
    lines = sortedYears.map((item, index) => {
      //Ottengo l' immagine di tutti i profili nati nell' anno specificato
      let profiles = Object.values(item.Profiles).map((item) => {
        return (
          <Profile
            key={item.Id}
            id={item.Id}
            name={item.Nome}
            surname={item.Cognome}
            path={item.Immagine}
          />
        );
      });

      return (
        <div key={item.Id}>
          {/* Rappresento l' anno */}
          <div
            style={{
              top: getY(index),
              left: 96,
            }}
            className="absolute bg-red-500 pl-8 pr-8 p-2 rounded-br-xl rounded-tl-xl z-10 border-4 border-white"
          >
            <span className="text-2xl">{item.Anno}</span>
          </div>

          {/* Link line */}
          <div
            style={{
              width: getX(profiles.length),
              top: getY(index) + 21,
              left: 200,
            }}
            className="absolute h-2 z-0 bg-white"
          >
            <div
              style={{ left: 104, top: -16 }}
              className="absolute bg-white rounded-full w-10 h-10"
            ></div>
          </div>

          {/* Rappresento l' immagine dei profili */}
          <div
            style={{ top: getY(index) - 20, left: 500 }}
            className="absolute flex flex-row gap-8"
          >
            {profiles}
          </div>
        </div>
      );
    });

  return (
    <div>
      <div
        style={{ height: getLenght(lines.length) }}
        className="w-2 bg-white ml-80"
      ></div>
      {lines}
    </div>
  );
};

export default Timeline;
