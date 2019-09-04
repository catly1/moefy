import React, { Component } from 'react';

const SongIndexItem = ({song}) =>{
    return(
    <li>
        <span>{song.name}</span>
    </li>
    )
}

export default SongIndexItem