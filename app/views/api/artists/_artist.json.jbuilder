json.extract! artist, :id, :name, :image_url
json.set! :songs, artist.songs.map { |song| song.id}
json.set! :albums, artist.albums.map {|album| album }