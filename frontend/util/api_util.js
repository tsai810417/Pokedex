export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchPokemonDetails = id => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
)
