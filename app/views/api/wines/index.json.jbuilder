@wines.each do |wine|
    json.set! wine.id do
        json.partial! 'wine', wine: wine
    end
end