 @liked_songs.each do |liked_song|
    json.set! liked_song.id do
        json.partial! 'liked_song', liked_song: liked_song
    end
end