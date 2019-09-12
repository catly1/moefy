import { combineReducers } from 'redux';
import artists from './artists_reducer';
import users from './users_reducer';
import songs from './songs_reducer';
import queue from './queue_reducer';
import albums from './albums_reducer';
import playlist from './playlist_reducer';

export default combineReducers({
    users, playlist, songs, albums, artists, queue
});
