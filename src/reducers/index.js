import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scurbs', duration: '1:45' },
        { title: 'No thumbs', duration: '2:30' },
        { title: 'Hardcore', duration: '1:40' },
        { title: 'Shalaka', duration: '3:45' },
        { title: 'Chund di', duration: '2:45' },
    ];
};

const selectedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});