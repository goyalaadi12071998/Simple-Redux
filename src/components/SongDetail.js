import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() { 
        const song = this.props.selectedSong;
        if(!song) return <div>No song selected</div>
        return (  
            <div className="ui content">
                <div>{song.title}</div>
                <div>{song.duration}</div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);