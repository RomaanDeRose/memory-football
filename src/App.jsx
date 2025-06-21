import { useEffect, useState } from "react";
import { TEAMS } from "./utils/teams";
import { randomTeam } from "./utils/randomTeam";
import { shuffle } from "./utils/shuffle";
import Teams from "./components/Teams";

function App() {
  const [teams, setTeams] = useState([]);
  const [comboCard, setComboCard] = useState([]);
  const [attemps, setAttemps] = useState(0);

  const actualizeTeams = () => {
    const randomTeams = randomTeam(TEAMS);
    const secondRandomTeams = randomTeams.map((team) => {
      return { ...team, id: team.id * 100 };
    });

    const teamsForGame = shuffle([...randomTeams, ...secondRandomTeams]);

    setTeams(teamsForGame);
  };

  const checkWinner = (teams, combo) => {
    if (combo.length < 2) return;
    setTimeout(() => {
      if (combo.length === 2) {
        setAttemps(attemps + 1);
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

  const gameOver = () => {
    let gameOver = true;
    for (let i = 0; i < teams.length; i++) {
      if (!teams[i].win) {
        gameOver = false;
        return gameOver;
      }
    }
    return gameOver;
  };

  const isGameEnd = gameOver();

  const resetGame = () => {
    actualizeTeams();
    setComboCard([]);
  };

  useEffect(() => {
    actualizeTeams();
  }, []);

  return (
    <div className="w-full h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-blue-600 font-extrabold text-balance text-center mb-3">
        A jugar!
      </h1>
      <p className="text-lg w-90 text-blue-400 font-medium text-balance text-center mb-10 leading-6">
        Juego de la memoria modo fútbol argentino
      </p>
      <Teams teams={teams} attemps={attemps} selectCard={selectCard} />
      {isGameEnd && (
        <button
          className="bg-blue-500 text-white text-xl uppercase font-medium px-8 py-3 rounded-xl cursor-pointer mt-8 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95"
          onClick={resetGame}
        >
          Jugar de nuevo
        </button>
      )}
    </div>
  );
}

export default App;
