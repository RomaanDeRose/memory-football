import { useEffect, useState } from "react";
import { TEAMS } from "./utils/teams";
import { randomTeam } from "./utils/randomTeam";
import { shuffle } from "./utils/shuffle";

function App() {
  const [teams, setTeams] = useState(null);

  const selectCard = (team) => {
    const newAllTeams = teams.map((teamCard) => {
      if (teamCard.id === team.id) {
        return { ...teamCard, selected: !teamCard.selected };
      }
      return teamCard;
    });

    setTeams(newAllTeams);
  };

  useEffect(() => {
    const randomTeams = randomTeam(TEAMS);
    const secondRandomTeams = randomTeams.map((team) => {
      return { ...team, id: team.id * 100 };
    });

    const teamsForGame = shuffle([...randomTeams, ...secondRandomTeams]);

    setTeams(teamsForGame);
  }, []);

  return (
    <div className="w-full h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-blue-600 font-extrabold text-balance text-center mb-3">
        A jugar!
      </h1>
      <p className="text-lg w-90 text-blue-400 font-medium text-balance text-center mb-10 leading-6">
        Juego de la memoria modo fútbol argentino
      </p>
      <div className="w-full max-w-xl mx-auto flex flex-wrap justify-center gap-2">
        {teams &&
          teams.map((team, i) => (
            <button>
              <article
                className="size-16 sm:size-20 p-2 rounded-md sm:rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-105 hover:border-gray-400 transition-scale duration-200"
                onClick={() => selectCard(team)}
              >
                <img
                  key={team.name + " " + i}
                  src={team.image}
                  alt={team.name}
                  className={`size-full object-contain ${
                    team.selected ? "block" : "hidden"
                  }`}
                  loading="lazy"
                />
              </article>
            </button>
          ))}
      </div>
    </div>
  );
}

export default App;
