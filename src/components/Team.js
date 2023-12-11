import React from "react";
import "../Team.css";

const Team = ({ team }) => {
  return (
    <div className="container">
      <div className="team-members">
        {team.map((teamMember) => (
          <div key={teamMember.pokemon.id} className="team-member">
            <img
              src={teamMember.pokemon.image}
              alt={teamMember.pokemon.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{teamMember.pokemon.name}</p>
            <p>{teamMember.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
