# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

Artist.delete_all
Album.delete_all
Song.delete_all
Collaboration.delete_all

artist1 = Artist.create(name: "Official HIGE DANdism", image_url: "./assets/artist/ohd.jpg")

album1 = Album.create(name: 'Love To Peace Ha Kimi No Naka', year: 2015, image_url: "./assets/album/ltphknn.jpg", artist_id: artist1.id)

song1_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/1.mp3")

song1 = Song.create(name: "Yuugure Zoi", album_id: album1.id, credits: "Written by: Satoshi Fujiwara", duration: "3:00")

song1.song.attach(io: song1_mp3, filename: "1.mp3")

collaboration1 = Collaboration.create(song_id: song1.id, artist_id: artist1.id)