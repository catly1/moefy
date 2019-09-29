json.extract! user, :id, :username
json.set! :playlists, user.playlists.map { |playlists| playlists}
json.set! :liked_songs, user.songs.map { |song| song.id}
json.set! :liked_songs_ids, user.liked_songs.map { |liked_song| liked_song.id}