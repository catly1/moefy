@albums.includes(:songs, :artist).each do |album|
    json.set! album.id do
        json.partial! 'album', album: album
    end
end