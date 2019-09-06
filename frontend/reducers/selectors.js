export const selectAllPokemon = state => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonItems = (state, pokemonId) => {
  let items = [];
  if (state.entities.pokemon[pokemonId] && state.entities.pokemon[pokemonId].item_ids) {
    state.entities.pokemon[pokemonId].item_ids.forEach(i => items.push(state.entities.items[i]));
  }
  return items;
}
