import React from 'react';
import Radium from 'radium';
// import {} from 'lodash';

import { PropTypes } from '../helpers/react';
const { string, number, func } = PropTypes;


class SceneImageMarker extends React.Component {
  static propTypes = {
    image: string,
    xPos: number,
    yPos: number,
    onClick: func
  };
  static defaultProps = {
    image: require('../images/marker.svg')
  };

  render() {
    const style = {
      position: 'absolute',
      top: this.props.yPos + '%',
      left: this.props.xPos + '%',
      // place by box center/bottom rather than left/top edge
      transform: 'translate(-50%, -100%)',
      height: 20,
      width: 20
    };

    return (
      <a onClick={ this.props.onClick }
         href="#"
      >
        <img style={ [style] }
             src={ this.props.image }
             alt="marker"
        />
      </a>
    );
  }
}

export default Radium(SceneImageMarker);
