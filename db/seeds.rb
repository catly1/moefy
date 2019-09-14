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


artist4 = Artist.create(name: "Livetune(kz)", image_url: "./assets/artist/lt.jpg")

album5 = Album.create(name: '「Re:Dial」', year: 2013, image_url: "./assets/album/r.jpg", artist_id: artist4.id)

song14_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Hatsune+Miku+-+Weekender+Girl.mp3")

song14 = Song.create(name: "Weekender Girl", album_id: album5.id, credits: "Performed by: Hatsune Miku", duration: "3:33")

song14.song.attach(io: song14_mp3, filename: "song14.mp3")

collaboration13 = Collaboration.create(song_id: song14.id, artist_id:artist4.id)


artist5 = Artist.create(name: "May'n", image_url: "./assets/artist/m.jpg")

album6 = Album.create(name: 'Frontier Greatest Hits', year: 2011, image_url: "./assets/album/gh.jpg", artist_id: artist3.id)

song15_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Sheryl+Nome+(cv.+May'n)+%26+Ranka+Lee+(cv.+Nakajima+Megumi)+-+d+Shootin'+Star+b.mp3")

song15 = Song.create(name: "d Shootin' Star b", album_id: album6.id, credits: "Performed by: May'n, Megumi Nakajima", duration: "5:39")

song15.song.attach(io: song15_mp3, filename: "song15.mp3")

collaboration15 = Collaboration.create(song_id: song15.id, artist_id:artist5.id)

collaboration16 = Collaboration.create(song_id: song15.id, artist_id:artist3.id)


song16_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Sheryl+Nome+(cv.+May'n)+-+Get+it+on+~+Kousoku+Cry+max.mp3")

song16 = Song.create(name: "Get it on", album_id: album6.id, credits: "Performed by: May'n, Megumi Nakajima", duration: "4:20")

song16.song.attach(io: song16_mp3, filename: "song16.mp3")

collaboration17 = Collaboration.create(song_id: song16.id, artist_id:artist5.id)

collaboration18 = Collaboration.create(song_id: song16.id, artist_id:artist3.id)


album7 = Album.create(name: 'End of the "Triangle"', year: 2011, image_url: "./assets/album/teoft.webp", artist_id: artist5.id)

song17_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/Megumi+Nakajima+-+Nyan+Nyan+Final+Attack+Frontier+Greatest+Hits!.mp3")

song17 = Song.create(name: "Nyan Nyan Final Attack", album_id: album7.id, credits: "Performed by: May'n, Megumi Nakajima", duration: "7:30")

song17.song.attach(io: song17_mp3, filename: "song17.mp3")

collaboration19 = Collaboration.create(song_id: song17.id, artist_id:artist5.id)

collaboration20 = Collaboration.create(song_id: song17.id, artist_id:artist3.id)


song18_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/%EF%BC%AD%EF%BD%81%EF%BD%99%E2%80%99%EF%BD%8E%EF%BC%8C%E4%B8%AD%E5%B3%B6%E6%84%9B+-+%E3%82%B5%E3%83%A8%E3%83%8A%E3%83%A9%E3%83%8E%E3%83%84%E3%83%90%E3%82%B5%EF%BD%9E%EF%BD%94%EF%BD%88%EF%BD%85%E3%80%80%EF%BD%85%EF%BD%8E%EF%BD%84%E3%80%80%EF%BD%8F%EF%BD%86%E3%80%80%EF%BD%94%EF%BD%92%EF%BD%89%EF%BD%81%EF%BD%8E%EF%BD%87%EF%BD%8C%EF%BD%85%EF%BC%9B%E3%82%B5%E3%83%A8%E3%83%8A%E3%83%A9%E3%83%8E%E3%83%84%E3%83%90%E3%82%B5%EF%BD%9C%E3%82%A2%E3%82%A4%E3%83%A2%EF%BD%9C%E6%94%BE%E8%AA%B2%E5%BE%8C%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%83%95%E3%83%AD%E3%82%A6.mp3")

song18 = Song.create(name: "Nyan Nyan Final Attack", album_id: album7.id, credits: "Performed by: May'n, Megumi Nakajima", duration: "7:19")

song18.song.attach(io: song18_mp3, filename: "song18.mp3")

collaboration20 = Collaboration.create(song_id: song18.id, artist_id:artist5.id)

collaboration21 = Collaboration.create(song_id: song18.id, artist_id:artist3.id)


album8 = Album.create(name: 'Universal Bunny', year: 2009, image_url: "./assets/album/ub.webp", artist_id: artist5.id)

song19_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/May'n+-+Universal+Bunny.mp3")

song19 = Song.create(name: "Universal Bunny", album_id: album8.id, credits: "Performed by: May'n", duration: "5:57")

song19.song.attach(io: song19_mp3, filename: "song19.mp3")

collaboration22 = Collaboration.create(song_id: song19.id, artist_id:artist5.id)



artist6 = Artist.create(name: "Round Table", image_url: "./assets/artist/rt.jpg")

album9 = Album.create(name: 'April', year: 2003, image_url: "./assets/album/a.png", artist_id: artist6.id)

song20_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/ROUND+TABLE+featuring+Nino+-+Dancin'+All+Night.mp3")

song20 = Song.create(name: "Dancin' All Night", album_id: album9.id, credits: "featuring: Nino", duration: "4:16")

song20.song.attach(io: song20_mp3, filename: "song20.mp3")

collaboration23 = Collaboration.create(song_id: song20.id, artist_id:artist6.id)


song21_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/ROUND+TABLE+featuring+Nino+-+Where+Is+Love.mp3")

song21 = Song.create(name: "Where is Love", album_id: album9.id, credits: "featuring: Nino", duration: "5:40")

song21.song.attach(io: song21_mp3, filename: "song21.mp3")

collaboration24 = Collaboration.create(song_id: song21.id, artist_id:artist6.id)



album10 = Album.create(name: 'Nino', year: 2006, image_url: "./assets/album/n.png", artist_id: artist6.id)

song22_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/ROUND+TABLE+featuring+Nino+-+Sunny+Side+Hill.mp3")

song22 = Song.create(name: "Sunny Side Hill", album_id: album10.id, credits: "featuring: Nino", duration: "3:32")

song22.song.attach(io: song22_mp3, filename: "song22.mp3")

collaboration25 = Collaboration.create(song_id: song22.id, artist_id:artist6.id)



song23_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/ROUND+TABLE+featuring+Nino+-+Message.mp3")

song23 = Song.create(name: "Message", album_id: album10.id, credits: "featuring: Nino", duration: "4:42")

song23.song.attach(io: song23_mp3, filename: "song23.mp3")

collaboration26 = Collaboration.create(song_id: song23.id, artist_id:artist6.id)


song24_mp3 = open("https://moefy-assets.s3-us-west-1.amazonaws.com/ROUND+TABLE+featuring+Nino+-+Groovin'+Magic.mp3")

song24 = Song.create(name: "Groovin' Magic", album_id: album10.id, credits: "featuring: Nino", duration: "4:22")

song24.song.attach(io: song24_mp3, filename: "song24.mp3")

collaboration27 = Collaboration.create(song_id: song24.id, artist_id:artist6.id)





