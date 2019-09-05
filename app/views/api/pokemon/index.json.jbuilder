@pokemons.each do | p |
  json.set! p.id do
    json.extract! p, :id, :name
    json.image_url asset_path(p.image_url)
  end
end
