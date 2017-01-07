import React from 'react';
// import Radium from 'radium';
import { PropTypes } from '../helpers/react';
const { objectOf, any, number, children } = PropTypes;

import Paper from 'material-ui/Paper';
import { GridList } from 'material-ui/GridList';

export default class ComponentImagesScrollingContainer extends React.Component {
  static propTypes = {
    cellHeight: number,
    depth: number,
    cols: number,
    children,
    style: objectOf(any)
  };

  static defaultProps = {
    cellHeight: 180,
    depth: 2,
    cols: 3
  };

  render() {
    return (
      <Paper zDepth={ this.props.depth }>
        <GridList cellHeight={ this.props.cellHeight }
                  cols={ this.props.cols }
                  style={ this.props.style }
        >
          { this.props.children }
        </GridList>
      </Paper>
    );
  }
}
