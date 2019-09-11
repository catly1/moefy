import { combineReducers } from 'redux';
import artists from './artists_reducer';
import users from './users_reducer';
import songs from './songs_reducer';
import queue from './queue_reducer';
import albums from './albums_reducer'

export default combineReducers({
    users, songs, albums, artists, queue
});
