import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { GetYears } from "./api/dateline";

const SPACING = 100;

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
      let profiles = Object.values(item.Profiles).map((item) => {
        return <Profile key={item.Id} id={item.Id} path={item.Immagine} />;
      });

      return (
        <div key={item.Id}>
          <div
            style={{
              top: getY(index),
              left: 96,
            }}
            className="absolute bg-red-500 pl-8 pr-8 p-2 rounded-br-xl rounded-tl-xl"
          >
            <span className="text-2xl">{item.Anno}</span>
          </div>
          <div
            style={{ top: getY(index) - 20, left: 500 }}
            className="absolute flex flex-row gap-4"
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
