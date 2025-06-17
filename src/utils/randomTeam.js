const randomTeam = (teams) => {
  const randomTeams = [];
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * teams.length);
    const randomTeam = teams[randomIndex];

    let isDuplicate = randomTeams.some((team) => team.id === randomTeam.id);
    let isInArray = false;

    while (!isInArray) {
      if (!isDuplicate) {
        randomTeams.push(randomTeam);
        isInArray = true;
      } else {
        const newRandomIndex = Math.floor(Math.random() * teams.length);
        const newRandomTeam = teams[newRandomIndex];

        isDuplicate = randomTeams.some((team) => team.id === newRandomTeam.id);
        if (!isDuplicate) {
          randomTeams.push(newRandomTeam);
          isInArray = true;
        }
      }
    }
  }

  return randomTeams;
};

export { randomTeam };
