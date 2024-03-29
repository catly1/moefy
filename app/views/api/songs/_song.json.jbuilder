json.extract! song, :id, :name, :album_id, :duration
json.set! :song_url, url_for(song.song)
json.set! :album, song.album.name
json.set! :artists, song.artists
json.set! :album_image, song.album.image_url
json.set! :album_id, song.album.id