import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Year from "../components/Year";
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

const getProfiles = (data) => {
  let profiles = Object.values(data).map((item) => {
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

  return profiles;
};

const getLines = (years) => {
  let sortedYears = Object.values(years).sort((a, b) => a.Anno - b.Anno);

  let lines = [];
  if (years !== undefined && years !== null && years !== [])
    lines = sortedYears.map((item, index) => {
      let profiles = getProfiles(item.Profiles);

      return (
        <div key={item.Id}>
          <Year index={index} year={item.Anno} top={getY(index)} />

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

  return lines;
};

const Timeline = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    GetYears().then((res) => {
      setYears(res);
    });
  }, []);

  let lines = getLines(years);

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
