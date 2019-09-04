import React, { Component } from 'react';

const SongIndexItem = ({song}) =>{
    return(
    <li>
        <span>
            <div>{song.name}</div>
            </span>
    </li>
    )
}

export default SongIndexItem