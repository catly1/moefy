import React, { Component } from 'react';
import SongIndexItem from '../songs/song_index_item_container'
import { isEmpty } from "lodash"

class UserSongIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songList: []
        };
        this.handleClicks = this.handleClicks.bind(this);
    }


    componentDidMount(){
        const { id } = this.props.currentUser
        let songList = this.props.likedSongs.map(song => {
            if (song.user_id === id) return this.props.songs[song.song_id]
        })
        this.setState({ songList: songList })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.songList.length === 0 && this.props.likedSongs.length > 0 && !_.isEmpty(this.props.songs)) {
            const { id } = this.props.currentUser
            let songList = this.props.likedSongs.map(song => {
                if(song.user_id === id) return this.props.songs[song.song_id]
            })
            this.setState({ songList: songList})
        }

        if (prevProps.likedSongs.length !== this.props.likedSongs.length && !_.isEmpty(this.props.songs)){
            const id1 = this.props.currentUser.id
            let songList2 = this.props.likedSongs.map(song => {
                if (song.user_id === id1) return this.props.songs[song.song_id]
            })
            this.setState({ songList: songList2 })
        }

    }

    handleClicks(e) {
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }

    queueConstructor(songId) {
        let songList = this.state.songList.map(song => song.id)
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    render() {
        if (this.state.songList.length === 0) {
            return <div></div>
        }

        let songs = this.state.songList.map(song => <SongIndexItem key={song.id} song={song}/>)

        return (
            <div className="song-index player-main-view">
                <div className="song-list">
                    <ol onClick={this.handleClicks}>{songs}
                    </ol>
                </div>
            </div>
        )
    }

}

export default UserSongIndex