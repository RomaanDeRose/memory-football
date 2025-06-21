import { useEffect, useState } from "react";
import { TEAMS } from "./utils/teams";
import { randomTeam } from "./utils/randomTeam";
import { shuffle } from "./utils/shuffle";
import Team from "./components/Team";
import Teams from "./components/Teams";

function App() {
  const [teams, setTeams] = useState(null);
  const [comboCard, setComboCard] = useState([]);

  const checkWinner = (teams, combo) => {
    if (combo.length < 2) return;
    setTimeout(() => {
      if (combo.length === 2) {
        const isWin = combo[0].name === combo[1].name;
        const newAllTeams = teams.map((team) => {
          if (isWin) {
            return {
              ...team,
              selected: false,
              win: isWin && team.name === combo[0].name ? true : team.win,
            };
          } else {
            return { ...team, selected: false };
          }
        });

        setTeams(newAllTeams);
        setComboCard([]);
      }
    }, 300);
  };

  const selectCard = (team) => {
    if (team.selected || team.win || comboCard.length === 2) return;

    const newAllTeams = teams.map((teamCard) => {
      if (teamCard.id === team.id) {
        return { ...teamCard, selected: !teamCard.selected };
      }
      return teamCard;
    });
    setTeams(newAllTeams);

    const cardsSelected = newAllTeams.filter((team) => team.selected);
    if (comboCard.length < 2) {
      setComboCard(cardsSelected);
    }

    checkWinner(newAllTeams, cardsSelected);
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
      <Teams teams={teams} selectCard={selectCard} />
    </div>
  );
}

export default App;
