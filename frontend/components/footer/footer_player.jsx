import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { MdPlayCircleOutline, MdPauseCircleOutline, MdSkipNext, MdSkipPrevious, MdVolumeUp, MdVolumeOff, MdVolumeDown} from "react-icons/md";
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
            savedVolume: 0,
            played: 0,
            duration: 0,
            muted: false,
            queue: [],
            currentSongIndex: 0,
            loop: false,
            shuffle: false,
        }
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleSeekMouseDown = this.handleSeekMouseDown.bind(this);
        this.handleSeekChange = this.handleSeekChange.bind(this);
        this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this)
        this.ref = this.ref.bind(this)
        this.handleProgress = this.handleProgress.bind(this)
        this.handleDuration = this.handleDuration.bind(this)
        this.handleMute = this.handleMute.bind(this)
        this.handleForward = this.handleForward.bind(this)
        this.nowPlaying = this.nowPlaying.bind(this)
        this.handleBackward = this.handleBackward.bind(this)
        this.handleEnded = this.handleEnded.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleRepeat = this.handleRepeat.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleContextMenu, false);
    }

    handleContextMenu(e) {
        e.stopPropagation();
        if (this.node && this.node.contains(e.target)) {
            const left = e.pageX
            const top = e.pageY
            const playlistMenu = document.querySelector(".playlist-menu")
            playlistMenu.style.left = `${left}px`
            playlistMenu.style.top = `${top - 120}px`
            playlistMenu.classList.add(`active`)
            this.songId = e.target.id
            playlistMenu.setAttribute("id", this.songId)
            return;
        }
        this.handleClickOutside(e);
    }

    handleClickOutside(e) {
        if (!Array.from(e.target.classList).includes("playlist-menu-item")) {
            const playlistMenu = document.querySelector(".playlist-menu")
            playlistMenu.classList.remove("active")
            playlistMenu.setAttribute("id","")
        }
    }


    componentDidUpdate(prevProps, prevState){
        if (this.props.queue !== prevProps.queue){
            this.setState({ 
                queue: this.props.queue,
            })
        }

        if (prevState.currentSongIndex && this.state.queue.length === 1){
            this.setState({
                currentSongIndex: 0
            })
        }

    }


    handlePlayPause (){
        this.setState({ playing: !this.state.playing })
    }
    
    handleForward (){
        const { currentSongIndex, queue} = this.state
        let newCurrentSongIndex = currentSongIndex + 1
        if (newCurrentSongIndex < queue.length && newCurrentSongIndex >= 0) {
            this.setState({ currentSongIndex: newCurrentSongIndex, 
                            playing: true})
        } 
    }

    handleBackward (){
        const { currentSongIndex, queue} = this.state
        let newCurrentSongIndex = currentSongIndex - 1
        if (newCurrentSongIndex < queue.length && newCurrentSongIndex >= 0) {
            this.setState({ currentSongIndex: newCurrentSongIndex, 
                            playing: true})
        }
    }

    handleVolumeChange (e){
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleToggleMuted(){
        this.setState({ muted: !this.state.muted })
    }

    handleMute() {
        if (this.state.volume) {
            this.setState({ savedVolume: this.state.volume })
            this.setState({ volume: 0 })
        } else {
            this.setState({ volume: this.state.savedVolume })
            this.setState({ savedVolume: 0 })
        }
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


    handleQueue(){
        this.setState({
            firstSong: this.state.queue[0],
            lastSong: this.state.queue[this.state.queue.length - 1]
        })
    }

    handleEnded(){
        this.handleForward()
    }

    handleRepeat(){
        this.setState({ loop: !this.state.loop })
    }

    handleShuffle(){
        this.setState({ shuffle: !this.state.shuffle })
    }

    nowPlaying(){
        const { songs } = this.props
        const { playing, volume, played, duration, muted, queue, currentSongIndex, loop, shuffle } = this.state
        let muteButton

        const green = {
            color: "green",
        }

        if (volume >= .50) {
            muteButton = <MdVolumeUp />
        } else if (volume < .50 && volume > 0) {
            muteButton = <MdVolumeDown />
        } else if (volume === 0) {
            muteButton = <MdVolumeOff />
        }



        let nowPlaying
        if (queue.length > 0) {

            let current = queue[currentSongIndex]
            let song = songs[current]
            if (song) {
            let artists = song.artists.map(artist =>
                <Link key={artist.id} to={`/player/artists/${artist.id}`}>{artist.name}</Link>
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
                    onEnded={this.handleEnded}
                    loop={loop}
                />
                <section className="song-info">
                    <div className="footer-player-album-wrapper"><Link to={`/player/albums/${song.album_id}`}><img src={song.album_image} alt={song.album} /></Link></div>
                    <div className="song-info-details">
                        <div className="song-info-details-first-line" id={song.id}>
                            {song.name}
                        </div>
                        <div className="song-info-details-second-line">
                            {artists[0]}
                        </div>
                    </div>
                    <section className="song-item-song-options footer-dot" onClick={this.handleContextMenu} ref={node => this.node = node} id={song.id}>
                        <div id={song.id}>...</div>
                    </section>
                </section>

                <section className="center-console">
                    <div className="control-buttons">
                        <div className="shuffle-button button" onClick={this.handleShuffle}>{shuffle ? <IoIosShuffle style={green} /> : <IoIosShuffle />}</div>
                        <div className="back-button button" onClick={this.handleBackward}><MdSkipPrevious /></div>
                        <div className="play-button button" onClick={this.handlePlayPause}>{playing ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}</div>
                        <div className="fwd-button button" onClick={this.handleForward}><MdSkipNext /></div>
                        <div className="rep-button button" onClick={this.handleRepeat}>{loop ? <TiArrowRepeat style={green}/> : <TiArrowRepeat />}</div>
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
                            <progress max={1} value={played} />
                        </div>
                        <div className="song-length"><Duration seconds={duration} /></div>
                    </div>
                </section>

                <section className="volume">

                    {/* <label className="volume-left"><input id='muted' type='checkbox' checked={muted} onChange={this.handleToggleMuted} /><span className="checkmark" /></label> */}
                    <label className="volume-left" onClick={this.handleMute}>{muteButton}</label>
                    <div className="volume-right">
                        <div className="volume-bar"><input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} /></div>
                        <progress max={1} value={volume} />
                    </div>
                </section>


            </div>
            )}
        }

        return nowPlaying
    }


    render (){

        return(
        <footer className="footer-player">
                {this.nowPlaying()}
        </footer>
        )
    }
}

export default FooterPlayer