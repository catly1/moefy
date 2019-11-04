import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item_container';
import AlbumIndexItem from '../album/album_index_item';
import ArtistIndexItem from '../artist/artist_index_item';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm: "",
            displayedSongs: [],
            displayedAlbums: [],
            displayedArtists: []
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.handleClicks = this.handleClicks.bind(this);
    }

    componentDidMount(){
        if (this.props.albums.length === 0) {
            this.props.requestAlbums()
        }
        if (this.props.artists.length === 0) {
            this.props.requestArtists()
        }
    }

    handleClicks(e) {
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }

    queueConstructor(songId) {
        let songList = this.state.displayedSongs.map(song => song.id)
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    onInputChange(e){
        let searchTerm = e.target.value
        let displayedSongs = this.props.songs.filter(song => song.name.match(new RegExp(searchTerm, "i")))
        let displayedAlbums = this.props.albums.filter(album => album.name.match(new RegExp(searchTerm, "i")))
        let displayedArtists = this.props.artists.filter(artist => artist.name.match(new RegExp(searchTerm, "i")))
        this.setState({
            searchTerm: searchTerm,
            displayedSongs: displayedSongs,
            displayedAlbums: displayedAlbums,
            displayedArtists: displayedArtists
        })
    }

    renderResults(){
        if (!this.state.searchTerm) return <div></div>
        const { displayedSongs, displayedAlbums, displayedArtists } = this.state
        let songs
        if (displayedSongs.length > 0) {
            songs =( 
                <div className="artist-show-songs">
                    <h2>Tracks</h2>
                    <ol id="artist-show-songs" onClick={this.handleClicks}>
                        {displayedSongs.map(song => <SongIndexItem key={song.id} song={song} />)}
                    </ol>
                </div>
            )
        }
        let albums
        if (displayedAlbums.length > 0){
            albums =(
                <div className="artist-show-albums">
                    <h2>Albums</h2>
                    <ul className="album-list-wrapper artist-show-albums">
                        {displayedAlbums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
                    </ul>
                </div>
            )

        }

        let artists
        if (displayedArtists.length > 0){
            artists =(
                <div className="search-artists">
                    <h2>Artists</h2>
                    <ul className="artist-list">
                        {displayedArtists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
                    </ul>
                </div>
            )
        }


        return <div className="rendered-results">
            <div className="search-album-song-wrapper">
                {songs}
                {albums}
                {artists}
            </div>

        </div>

    }

    render(){
        return <div className="search-page">
            <div className="player-background player-background-search-low"></div>
            <div className="player-background player-background-search"></div>
            <div className="search-input-wrapper">
                <div className="playlist-content-spacing">
                    <input className="playlist-input search-input" type="text" spellCheck="false" onChange={this.onInputChange} placeholder="Start typing..."/>
                </div>
            </div>
            {this.renderResults()}
        </div>
    }
}

export default withRouter(Search)