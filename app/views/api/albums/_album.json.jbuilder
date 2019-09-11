json.extract! album, :id, :name, :year, :image_url, :artist_id
json.set! :artist, album.artist.name
json.set! :songs, album.songs.map { |song| song.id}