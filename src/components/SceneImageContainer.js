import React from 'react';
import Radium from 'radium';
import { PropTypes } from '../helpers/react';
const { string, number, children } = PropTypes;
import Paper from 'material-ui/Paper';

// import {} from 'lodash';

class SceneImageContainer extends React.Component {
  static propTypes = {
    src: string.isRequired,
    alt: string,
    depth: number,
    children
  };

  static defaultProps = {
    alt: 'scene image',
    depth: 2
  };

  render() {
    const containerStyle = {
      position: 'relative',
      width: '100%',
      padding: 1
    };

    const imageStyle = {
      height: '100%',
      width: '100%',
      borderRadius: 1
    };

    return (
      <Paper zDepth={ this.props.depth }
             style={ containerStyle }
      >
        <img src={ this.props.src }
             alt={ this.props.alt }
             style={ [imageStyle] }
        />
        { this.props.children }
      </Paper>
    );
  }
}

export default Radium(SceneImageContainer)
