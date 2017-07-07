import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Songs from './Songs';
import axios from 'axios'

export default class Main extends Component {

  constructor(){
    super();
    this.state = {
      playlist: {},
    }
    this.fetchPlaylist = this.fetchPlaylist.bind(this);
  }

  fetchPlaylist(playlistId){
    axios.get(`/api/playlists/${playlistId}`)
      .then(res => res.data)
      .then(playlist => {
        this.setState({ playlist: playlist });
      });
  }

  componentDidMount () {
    const playlistId = this.props.match.params.playlistId;
    this.fetchPlaylist(playlistId);
  }

  componentWillReceiveProps(nextProps){
    const nextplaylistId = nextProps.match.params.playlistId;
    const currentplaylistId = this.props.match.params.playlistId;
    if (currentplaylistId !== nextplaylistId) {
      this.fetchPlaylist(nextplaylistId);
    }
  }

  render() {
    const playlist = this.state.playlist;

    return (<div>
      <h3>{ playlist.name }</h3>
      <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />
    </div>)
  }
}
