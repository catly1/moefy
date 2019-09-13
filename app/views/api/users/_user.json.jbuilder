json.extract! user, :id, :username
json.set! :playlists, user.playlists.map { |playlists| playlists}