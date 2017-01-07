import { PropTypes as ReactPropTypes } from 'react';

export const PropTypes = {
  ...ReactPropTypes,
  children: ReactPropTypes.node,
};
