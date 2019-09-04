import { combineReducers } from 'redux';

import users from './users_reducer';
import songs from './songs_reducer'

export default combineReducers({
    users, songs
});
