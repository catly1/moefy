 @playlist_songs.each do |playlist_song|
    json.set! playlist_song.id do
        json.partial! 'playlist_song', playlist_song: playlist_song
    end
end