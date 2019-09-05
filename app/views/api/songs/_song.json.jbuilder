json.extract! song, :id, :name, :album_id
json.set! :song_url, asset_path(song.song_url)
json.set! :album, song.album.name
json.set! :artists, song.artists

