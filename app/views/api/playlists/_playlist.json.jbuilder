json.extract! playlist, :id, :name, :user_id
json.set! :songs, playlist.songs.map { |song| song.id }
json.set! :owner_name, playlist.user.username