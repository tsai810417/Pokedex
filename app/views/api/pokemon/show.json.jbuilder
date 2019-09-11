json.set! "pokemon" do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type,:item_ids
  json.image_url asset_path(@pokemon.image_url)
end
json.set! "items" do
  @pokemon.items.each do | i |
    json.set! i.id do
      json.extract! i, :id, :name, :pokemon_id, :price, :happiness
      json.image_url image_url(i.image_url)
    end
  end
end
