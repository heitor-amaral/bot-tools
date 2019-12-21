import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayaut({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayaut.propTypes = {
  children: PropTypes.element.isRequired,
};
