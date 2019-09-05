import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Slider, Direction } from 'react-player-controls'

class FooterPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            playing: false,
            volume: 0.8,
            played: 0,
        }
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleSeekMouseDown = this.handleSeekMouseDown.bind(this);
        this.handleSeekChange = this.handleSeekChange.bind(this);
        this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this)
        this.ref = this.ref.bind(this)
        this.handleProgress = this.handleProgress.bind(this)
    }
    
    handlePlayPause (){
        this.setState({ playing: !this.state.playing })
    }
    
    handleVolumeChange (e){
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleSeekMouseDown (e){
        this.setState({ seeking: true })
    }

    handleSeekChange (e){
        this.setState({ played: parseFloat(e.target.value) })
    }

    handleSeekMouseUp (e){
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    
    handleProgress (state){
        console.log('onProgress', state)
        if (!this.state.seeking) {
            this.setState(state)
        }
    }


    ref (player){
        this.player = player
    }

    render (){
        const { queue, songs } = this.props
        const { playing, volume, played } = this.state

        let nowPlaying
        if (queue.length > 0) {
            let last = queue[queue.length - 1]
            nowPlaying = (<div className="music-player">
                <ReactPlayer 
                ref={this.ref}
                url={songs[last].song_url} 
                playing={playing} 
                height="0%" 
                width="0%" 
                volume={volume}
                onProgress={this.handleProgress}
                />
                <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>

                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                />


                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                
                </div>
                )
            }
            
            return(
                <footer className="footer-player">
            <div>
                {nowPlaying}
            </div>
        </footer>
        )
    }
}

export default FooterPlayer