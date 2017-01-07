import React from 'react';
// import Radium from 'radium';
import { PropTypes } from '../helpers/react';
const { string, number } = PropTypes;

import { GridTile } from 'material-ui/GridList';


export default class ComponentImageTile extends React.Component {
  static propTypes = {
    title: string,
    subtitle: string,
    imageSrc: string,
    alt: string
  };
  static defaultProps = {
    depth: 2,
    alt: 'component tile'
  };

  render() {
    return (
      <GridTile title={ this.props.title }
                subtitle={ this.props.subtitle }>
        <img src={ this.props.imageSrc }
             alt={ this.props.alt }
        />
      </GridTile>
    );
  }
}
