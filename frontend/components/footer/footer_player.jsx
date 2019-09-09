import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { MdPlayCircleOutline, MdPauseCircleOutline, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { IoIosShuffle } from "react-icons/io";
import { TiArrowRepeat } from "react-icons/ti";
import Duration from './duration';
import { Link, Route, Switch } from 'react-router-dom';


class FooterPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            playing: true,
            volume: 0.8,
            played: 0,
            duration: 0,
            muted: false,
        }
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleSeekMouseDown = this.handleSeekMouseDown.bind(this);
        this.handleSeekChange = this.handleSeekChange.bind(this);
        this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this)
        this.ref = this.ref.bind(this)
        this.handleProgress = this.handleProgress.bind(this)
        this.handleDuration = this.handleDuration.bind(this)
    }
    
    handlePlayPause (){
        this.setState({ playing: !this.state.playing })
    }
    
    handleVolumeChange (e){
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleToggleMuted = () => {
        this.setState({ muted: !this.state.muted })
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
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    handleDuration (duration){
        this.setState({ duration })
    }


    ref (player){
        this.player = player
    }

    render (){
        const { queue, songs } = this.props
        const { playing, volume, played, duration, muted } = this.state
        let nowPlaying
        if (queue.length > 0) {
            let last = queue[queue.length - 1]
            let song = songs[last]
            let artists = song.artists.map(artist =>
                <Link key={artist.id} to="">{artist.name}</Link>
                )
            nowPlaying = (<div className="music-player">
                <ReactPlayer 
                ref={this.ref}
                url={song.song_url} 
                playing={playing} 
                height="0%" 
                width="0%" 
                volume={volume}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
                muted={muted}
                />
                <section className="song-info">
                    <div><Link to=""><img src={song.album_image} alt={song.album}/></Link></div>
                    <div className="song-info-details">
                        <div className="song-info-details-first-line">
                            {song.name}
                        </div>
                        <div className="song-info-details-second-line">
                            {artists[0]}
                        </div>
                    </div>
                </section>

                <section className="center-console">
                <div className="control-buttons">
                    <div className="shuffle-button button"><IoIosShuffle/></div>
                    <div className="back-button button"><MdSkipPrevious/></div>
                    <div className="play-button button" onClick={this.handlePlayPause}>{playing ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}</div>
                    <div className="fwd-button button"><MdSkipNext/></div>
                    <div className="rep-button button"><TiArrowRepeat /></div>              
                </div>
                <div className="seek-bar">
                    <div className="current-progress"><Duration seconds={duration * played} /></div>
                    <div className="range-bar">
                        <input
                            type='range' min={0} max={1} step='any'
                            value={played}
                            onMouseDown={this.handleSeekMouseDown}
                            onChange={this.handleSeekChange}
                            onMouseUp={this.handleSeekMouseUp}
                        />
                        <progress max={1} value={played}/>
                    </div>
                    <div className="song-length"><Duration seconds={duration} /></div>
                </div>
                </section>

                <section className="volume">

                    <div className="volume-left"><input id='muted' type='checkbox' checked={muted} onChange={this.handleToggleMuted} /></div>
                    <div className="volume-right">
                        <div className="volume-bar"><input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} /></div>
                        <progress max={1} value={volume}/>
                    </div>
                </section>

                
                </div>
                )
            }
            
        return(
        <footer className="footer-player">
                {nowPlaying}
        </footer>
        )
    }
}

export default FooterPlayer