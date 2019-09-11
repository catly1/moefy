import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class AlbumIndexItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {album} = this.props

        return(
            <li>
                {album.name}
            </li>
        )
    }


}

export default AlbumIndexItem