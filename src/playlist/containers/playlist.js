import React, { Component } from 'react';
import VideoItem from '../components/video-item';
import './playlist.css';

const videos = [
  {
    name: 'Gorrillaz',
    cover: 'https://media.npr.org/assets/music/programs/worldcafe/2010/06/gorillaz-e0433721e594edac262cae60a489d0162a5ff3f6-s900-c85.jpg',
    id: 1,
  },
  {
    name: 'Gorrillaz',
    cover: 'https://media.npr.org/assets/music/programs/worldcafe/2010/06/gorillaz-e0433721e594edac262cae60a489d0162a5ff3f6-s900-c85.jpg',
    id: 2,
  },
  {
    name: 'Gorrillaz',
    cover: 'https://media.npr.org/assets/music/programs/worldcafe/2010/06/gorillaz-e0433721e594edac262cae60a489d0162a5ff3f6-s900-c85.jpg',
    id: 3,
  },
  {
    name: 'Gorrillaz',
    cover: 'https://media.npr.org/assets/music/programs/worldcafe/2010/06/gorillaz-e0433721e594edac262cae60a489d0162a5ff3f6-s900-c85.jpg',
    id: 4,
  },
  {
    name: 'Gorrillaz',
    cover: 'https://media.npr.org/assets/music/programs/worldcafe/2010/06/gorillaz-e0433721e594edac262cae60a489d0162a5ff3f6-s900-c85.jpg',
    id: 5,
  }
]

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        {
          videos.map((item) => (
            <VideoItem
              handleClick={this.props.openModal}
              key={item.id}
              {...item}
            />
          ))
        }
      </div>
    )
  }
}


export default Playlist;
