@pokemons.each do | p |
  json.set! p.id do
    json.extract! p, :id, :name
    json.image_url image_url("/pokemon_snaps/#{p.image_url}")
  end
end
