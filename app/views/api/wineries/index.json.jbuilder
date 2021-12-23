@wineries.each do |winery|
    json.set! winery.id do
        json.partial! 'winery', winery: winery
    end
end