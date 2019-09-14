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
User.delete_all

guest = User.create(username: "Guest", password: "password", email: "email@email.com", gender: "weeb", dob: "1/1/1990")

artist1 = Artist.create(name: "Official HIGE DANdism", image_url: "./assets/artist/ohd.jpg")

album1 = Album.create(name: 'Love To Peace Ha Kimi No Naka', year: 2015, image_url: "./assets/album/ltphknn.jpg", artist_id: artist1.id)

song1_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/1.mp3")

song1 = Song.create(name: "Yuugure Zoi", album_id: album1.id, credits: "Written by: Satoshi Fujiwara", duration: "3:00")

song1.song.attach(io: song1_mp3, filename: "1.mp3")

collaboration1 = Collaboration.create(song_id: song1.id, artist_id: artist1.id)


artist2 = Artist.create(name: "Walkure", image_url: "./assets/artist/walkure.jpg")

album2 = Album.create(name: 'Walkure wa Uragiranai', year: 2018, image_url: "./assets/album/whu.jpg", artist_id: artist2.id)

song2_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+Dancing+in+the+Moonlight.mp3")

song2 = Song.create(name: "Dancing in the Moonlight", album_id: album2.id, credits: "Written by: Walkure", duration: "5:19")

song2.song.attach(io: song2_mp3, filename: "2.mp3")

collaboration2 = Collaboration.create(song_id: song2.id, artist_id:artist2.id)


album3 = Album.create(name: 'Walkure Attack!', year: 2016, image_url: "./assets/album/wa.webp", artist_id: artist2.id)

song3_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+Walk%C3%BCre+Attack!.mp3")

song3 = Song.create(name: "Walkure Attack!", album_id: album3.id, credits: "Written by: Walkure", duration: "5:11")

song3.song.attach(io: song3_mp3, filename: "song3.mp3")

collaboration3 = Collaboration.create(song_id: song3.id, artist_id:artist2.id)


song4_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%B3%EF%BD%9EAlbum+Version%EF%BD%9E.mp3")

song4 = Song.create(name: "Ikenai Borderline", album_id: album3.id, credits: "Written by: Walkure", duration: "4:39")

song4.song.attach(io: song4_mp3, filename: "song4.mp3")

collaboration4 = Collaboration.create(song_id: song4.id, artist_id:artist2.id)


song5_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E3%83%AB%E3%83%B3%E3%81%8C%E3%83%94%E3%82%AB%E3%83%83%E3%81%A8%E5%85%89%E3%81%A3%E3%81%9F%E3%82%89%EF%BD%9EAlbum+Version%EF%BD%9E.mp3")

song5 = Song.create(name: "Rune Pika tto Hikattara", album_id: album3.id, credits: "Written by: Walkure", duration: "4:26")

song5.song.attach(io: song5_mp3, filename: "song5.mp3")

collaboration5 = Collaboration.create(song_id: song5.id, artist_id:artist2.id)



song6_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E4%B8%8D%E7%A2%BA%E5%AE%9A%E6%80%A7%E2%98%86COSMIC+MOVEMENT.mp3")

song6 = Song.create(name: "Fukakuteisei ☆ COSMIC MOVEMENT", album_id: album3.id, credits: "Written by: Walkure", duration: "4:04")

song6.song.attach(io: song6_mp3, filename: "song6.mp3")

collaboration6 = Collaboration.create(song_id: song6.id, artist_id:artist2.id)


song7_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E4%B8%80%E5%BA%A6%E3%81%A0%E3%81%91%E3%81%AE%E6%81%8B%E3%81%AA%E3%82%89.mp3")

song7 = Song.create(name: "Ichi Dake no Koi nara", album_id: album3.id, credits: "Written by: Walkure", duration: "4:12")

song7.song.attach(io: song7_mp3, filename: "song7.mp3")

collaboration7 = Collaboration.create(song_id: song7.id, artist_id:artist2.id)


song8_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E5%83%95%E3%82%89%E3%81%AE%E6%88%A6%E5%A0%B4.mp3")

song8 = Song.create(name: "Bokura no Senjou", album_id: album3.id, credits: "Written by: Walkure", duration: "4:25")

song8.song.attach(io: song8_mp3, filename: "song8.mp3")

collaboration8 = Collaboration.create(song_id: song8.id, artist_id:artist2.id)


song9_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E6%81%8B!+%E3%83%8F%E3%83%AC%E3%82%A4%E3%82%B7%E3%83%A7%E3%83%B3+THE+WAR%EF%BD%9EAlbum+Version%EF%BD%9E.mp3")

song9 = Song.create(name: "Koi! Halation THE WAR", album_id: album3.id, credits: "Written by: Walkure", duration: "5:09")

song9.song.attach(io: song9_mp3, filename: "song9.mp3")

collaboration9 = Collaboration.create(song_id: song9.id, artist_id:artist2.id)


album4 = Album.create(name: 'Walkure Trap!', year: 2016, image_url: "./assets/album/wt.webp", artist_id: artist2.id)

song10_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC+-+%E7%A0%B4%E6%BB%85%E3%81%AE%E7%B4%94%E6%83%85.mp3")

song10 = Song.create(name: "Hametsu no Junjou", album_id: album4.id, credits: "Written by: Walkure", duration: "4:28")

song10.song.attach(io: song10_mp3, filename: "song10.mp3")

collaboration10 = Collaboration.create(song_id: song10.id, artist_id:artist2.id)


song11_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Walk%C3%BCre+-+Hear+The+Universe.mp3")

song11 = Song.create(name: "Hear The Universe", album_id: album4.id, credits: "Written by: Walkure", duration: "4:23")

song11.song.attach(io: song11_mp3, filename: "song11.mp3")

collaboration11 = Collaboration.create(song_id: song11.id, artist_id:artist2.id)


artist3 = Artist.create(name: "Megumi Nakajima", image_url: "./assets/artist/mn.jpg")

album5 = Album.create(name: 'Wasurenai Yo', year: 2018, image_url: "./assets/album/wy.jpg", artist_id: artist3.id)

song12_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Megumi+Nakajima+-+Flower+In+Green.mp3")

song12 = Song.create(name: "Flower In Green", album_id: album5.id, credits: "Written by: Megumi Nakajima", duration: "4:59")

song12.song.attach(io: song12_mp3, filename: "song12.mp3")

collaboration12 = Collaboration.create(song_id: song12.id, artist_id:artist3.id)


song13_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Megumi+Nakajima+-+Hello!.mp3")

song13 = Song.create(name: "Hello!", album_id: album5.id, credits: "Written by: Megumi Nakajima", duration: "4:39")

song13.song.attach(io: song13_mp3, filename: "song13.mp3")

collaboration13 = Collaboration.create(song_id: song13.id, artist_id:artist3.id)