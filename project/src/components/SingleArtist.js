import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
import TrackList from './TrackList';
import './css/SingleArtist.css';

export default class SingleArtist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            albums: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.spotify.com/v1/artists/${id}`).then(response => {
            this.setState({artist: response.data});
        });
        axios.get(`https://api.spotify.com/v1/artists/${id}/albums`).then(response => {
            this.setState({albums: response.data.items});
        });
    }

    render() {
        return (
            <div>
              <div className="artist_header">
                <div
                  className="artist_background_image"
                  style={{backgroundImage: `url(${(this.state.artist.images!=null && this.state.artist.images.length>0)?this.state.artist.images[1].url:''})`}}>
                  <div className="details_container">
                    <p className="followers">
                      {(this.state.artist.followers!=null)?this.state.artist.followers.total:''} Followers
                    </p>
                    <h1 className="title">
                      {(this.state.artist.name!=null)?this.state.artist.name:''}
                    </h1>
                    <a className="button">Follow</a>
                    <a className="button_transparent">
                      Play All
                    </a>
                  </div>
                </div>
              </div>
              <div className="artist_content">
                <h2 className="section_title">
                  Top Tracks
                </h2>
                <TrackList id={this.props.match.params.id} type={"artist"} trackId={this.props.trackId} playTrack={this.props.playTrack}/>
              </div>
              <div className="artist_albums">
                <h2 className="section_title">Albums</h2>
                <AlbumList albums={this.state.albums}/>
              </div>
            </div>

        );
    }
  }
