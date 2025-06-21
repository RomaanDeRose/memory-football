import React from "react";
import Team from "./Team";

const Teams = ({ teams, ...props }) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-wrap justify-center gap-2">
      {teams &&
        teams.map((team) => <Team key={team.id} team={team} {...props} />)}
    </div>
  );
};

export default Teams;
