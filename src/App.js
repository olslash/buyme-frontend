import React, { Component } from 'react';
import { range } from 'lodash';
import './App.css';

import ComponentImagesScrollingContainer from './components/ComponentImagesScrollingContainer';
import ComponentImageTile from './components/ComponentImageTile';

import SceneImageContainer from './components/SceneImageContainer';
import SceneImageMarker from './components/SceneImageMarker';

const testImageUrl = 'https://s3-us-west-2.amazonaws.com/wallpapr/images/bellagio_fountain_show-wallpaper-1920x1200.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentImagesScrollingContainer style={ {
            height: 400,
            overflowY: 'auto'
        } }>
          {
            range(10).map((n) => (
              <ComponentImageTile title="image 1"
                                  subtitle="cool"
                                  imageSrc={ testImageUrl }
                                  key={ n }
              />
            ))
          }
        </ComponentImagesScrollingContainer>
        <SceneImageContainer src={ testImageUrl }>
          <SceneImageMarker xPos={ 50 } yPos={ 50 }/>
          <SceneImageMarker xPos={ 25 } yPos={ 25 }/>
        </SceneImageContainer>
      </div>
    );
  }
}

export default App;
