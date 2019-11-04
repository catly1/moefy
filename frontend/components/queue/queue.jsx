import React, { Component } from 'react';
import SongIndexItem from '../songs/song_index_item_container';

class Queue extends Component{
    constructor(props){
        super(props)
        this.state = {
            queue:[],
            currentSongIndex: 0
        }


    }

    componentDidMount(){
        this.setState({
            queue: this.props.queue,
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.queue !== prevProps.queue) {
    //         this.setState({
    //             queue: this.props.queue,
    //         })
    //     }

    //     if (prevState.currentSongIndex && this.state.queue.length === 1) {
    //         this.setState({
    //             currentSongIndex: 0
    //         })
    //     }
    // }

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

    render(){
        return(
            <div className="queue-page player-main-view">
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
                    <ol>
                        {this.renderNextSongs()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Queue