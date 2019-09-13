json.extract! playlist, :id, :name, :user_id
json.set! :songs, playlist.songs.map { |song| song.id }
json.set! :playlist_songs, playlist.playlist_songs.map { |playlist_song| playlist_song}
json.set! :owner_name, playlist.user.username