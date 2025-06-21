import React from "react";
import Team from "./Team";

const Teams = ({ teams, attemps, ...props }) => {
  return (
    <div className="w-full max-w-xl">
      <p className="text-blue-500 font-medium text-lg text-right mb-1.5 mr-8">
        Intentos:{" "}
        <span className="bg-blue-500 text-white font-bold px-2 rounded">
          {attemps}
        </span>
      </p>
      <div className="w-full mx-auto flex flex-wrap justify-center gap-2">
        {teams &&
          teams.map((team) => <Team key={team.id} team={team} {...props} />)}
      </div>
    </div>
  );
};

export default Teams;
