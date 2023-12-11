import React, { useState } from "react";
import PokemonList from "../src/components/PokemonList";
import Team from "../src/components/Team";
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([]);

  const handleAddToTeam = (newTeamMember) => {
    if (
      newTeamMember.pokemon &&
      team.length < 6 &&
      !team.find((member) => member.pokemon.id === newTeamMember.pokemon.id)
    ) {
      setTeam([...team, newTeamMember]);
    } else {
      alert("Team is full or Pokemon is already in the team.");
    }
  };

  const handleRemoveFromTeam = (removedTeamMember) => {
    const updatedTeam = team.filter(
      (teamMember) => teamMember.pokemon.id !== removedTeamMember.pokemon.id,
    );
    setTeam(updatedTeam);
  };

  const handleEditItem = (editedTeamMember, newItem) => {
    const updatedTeam = team.map((teamMember) =>
      teamMember.pokemon.id === editedTeamMember.pokemon.id
        ? { ...teamMember, item: newItem }
        : teamMember,
    );
    setTeam(updatedTeam);
  };
  const itemOptions = [
    "Air Balloon",
    "Assault Vest",
    "Choice Band",
    "Choice Scarf",
    "Destiny Knot",
    "Expert Belt",
    "Focus Band",
    "Focus Sash",
    "Leftovers",
    "Quick Claw",
  ];

  return (
    <div className={"container"}>
      <PokemonList onAddToTeam={handleAddToTeam} />
      <Team
        team={team}
        onRemoveFromTeam={handleRemoveFromTeam}
        onEditItem={handleEditItem}
        itemOptions={itemOptions}
      />
    </div>
  );
};

export default App;
