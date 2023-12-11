import React, { useState } from "react";
import pokemonData from "../data/poke_data.json";
import "../PokemonList.css";

const PokemonList = ({ onAddToTeam }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToTeam = () => {
    if (selectedPokemon && selectedItem) {
      onAddToTeam({
        pokemon: selectedPokemon,
        item: selectedItem,
      });
      // Reset selections
      setSelectedPokemon(null);
      setSelectedItem(null);
    } else {
      alert("Please select a Pokemon and an item.");
    }
  };

  return (
    <div className="pokemon-list-container">
      <div className="pokemon-selection-container">
        <div className="pokemon-details">
          <p>Pokemon</p>
          <select
            onChange={(e) => setSelectedPokemon(JSON.parse(e.target.value))}
          >
            <option value="" disabled selected>
              Select a Pokemon
            </option>
            {pokemonData.pokemon.map((pokemon) => (
              <option key={pokemon.id} value={JSON.stringify(pokemon)}>
                {pokemon.name}
              </option>
            ))}
          </select>

          {selectedPokemon && (
            <div>
              <img
                src={selectedPokemon.image}
                alt={selectedPokemon.name}
                className="pokemon-image"
              />
            </div>
          )}
        </div>

        <div className="item-details">
          <p>Item</p>
          <select onChange={(e) => setSelectedItem(e.target.value)}>
            <option value="" disabled selected>
              Select an Item
            </option>
            <option value="Assault Vest">Assault Vest</option>
            <option value="Choice Band">Choice Band</option>
            <option value="Choice Scarf">Choice Scarf</option>
            <option value="Destiny Knot">Destiny Knot</option>
            <option value="Expert Belt">Expert Belt</option>
            <option value="Focus Band">Focus Band</option>
            <option value="Focus Sash">Focus Sash</option>
            <option value="Leftovers">Leftovers</option>
            <option value="Quick Claw">Quick Claw</option>
          </select>

          {selectedPokemon && selectedItem && (
            <div>
              <p>Selected Item: {selectedItem}</p>
            </div>
          )}
        </div>
      </div>

      {/* Add to Team button */}
      <button onClick={handleAddToTeam} className="add-to-team-button">
        Add to Team
      </button>
    </div>
  );
};

export default PokemonList;
