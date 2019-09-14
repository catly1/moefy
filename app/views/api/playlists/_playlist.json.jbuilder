json.extract! playlist, :id, :name, :user_id
json.set! :songs, playlist.songs.map { |song| song.id }
json.set! :playlist_songs, playlist.playlist_songs.map { |playlist_song| playlist_song.id}
json.set! :playlist_song_song_ids, playlist.playlist_songs.map { |playlist_song| playlist_song.song_id}
json.set! :owner_name, playlist.user.username