const getMonth = (m) => {
  var month = new Array();
  month[0] = "Gennaio";
  month[1] = "Febbraio";
  month[2] = "Marzo";
  month[3] = "Aprile";
  month[4] = "Maggio";
  month[5] = "Giugno";
  month[6] = "Luglio";
  month[7] = "Agosto";
  month[8] = "Settembre";
  month[9] = "Ottobre";
  month[10] = "Novembre";
  month[11] = "Dicembre";
  return month[m];
};

const BornData = ({ profile }) => {
  let nascita = new Date(profile.Nascita);
  let morte = new Date(profile.Morte);

  return (
    <div className="mt-3 text-center">
      {profile.Nascita !== undefined && profile.Nascita !== null && (
        <span>
          Nato il {nascita.getDate()} {getMonth(nascita.getMonth())}{" "}
          {nascita.getFullYear()}
        </span>
      )}
      {profile.LuogoNascita !== undefined && profile.LuogoNascita !== null && (
        <span> a {profile.LuogoNascita}</span>
      )}
      <br />
      {profile.Morte !== undefined && profile.Morte !== null && (
        <span>
          Morto il {morte.getDate()} {getMonth(morte.getMonth())}{" "}
          {morte.getFullYear()}
        </span>
      )}
    </div>
  );
};

export default BornData;
