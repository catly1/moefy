json.extract! song, :id, :name, :album_id
json.set! :song_url, url_for(song.song)
json.set! :album, song.album.name
json.set! :artists, song.artists

