import React, { Component } from 'react';
import SongIndexItem from '../songs/song_index_item_container';

class Queue extends Component{
    constructor(props){
        super(props)
        this.state = {
            queue: this.props.history.location.queue || [],
            currentSongIndex: 0,
            songList: []
        }
        debugger
        this.handleClicks = this.handleClicks.bind(this);
    }

    componentDidMount(){
        let queue = this.props.history.location.queue || []
        let currentIndex = queue.indexOf(this.props.currentSong)
        this.setState({
            songList: queue.slice(1 + currentIndex) || []
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // if (JSON.stringify(this.state.queue) !== JSON.stringify(this.props.queue)) {
        //     let currentIndex = this.props.queue.indexOf(this.props.currentSong)
        //     this.setState({
        //         queue: this.props.queue,
        //         songList: this.props.queue.slice(1 + currentIndex)
        //     })
        // }
    }

    renderCurrentSong(){
        const { queue, currentSongIndex} = this.state
        const { songs, currentSong } = this.props
        if (queue.length > 0 && currentSong){
            let song = songs[currentSong]
            return <SongIndexItem key={song.id} song={song} className="queue-current-song"/>
        } 

        return <div></div>
    }

    renderNextSongs(){
        const { queue, currentSongIndex } = this.state
        const { songs, currentSong } = this.props

        if(queue.length > 0){
            let currentIndex = queue.indexOf(currentSong)
            let restOfQueue = queue.slice(1 + currentIndex)
            let nextSongs = restOfQueue.map(songId => {
                let song = songs[songId]
                return <SongIndexItem key={song.id} song={song} className="queue-song" />
            })
            return nextSongs
        }

        return <div></div>
    }

    handleClicks(e) {
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }

    queueConstructor(songId) {
        let songList = this.state.songList
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    render(){
        return(
            <div className="queue-page player-main-view">
                <div className="player-background player-background-queue-low"></div>
                <div className="player-background player-background-queue"></div>
                <h1>Play Queue</h1>
                <h2>Now Playing</h2>
                <div className="song-list queue-current">
                    <ol>
                        {this.renderCurrentSong()}
                    </ol>
                </div>
                <h2>Next Up</h2>
                <div className="song-list">
                    <ol onClick={this.handleClicks}>
                        {this.renderNextSongs()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Queue