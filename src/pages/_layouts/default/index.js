import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../../components/Header';

export default function DefaultLayaut({ children }) {
  console.log(children);
  return (
    <Wrapper>
      <Header page={children.type.name} />
      {children}
    </Wrapper>
  );
}

DefaultLayaut.propTypes = {
  children: PropTypes.element.isRequired,
};
