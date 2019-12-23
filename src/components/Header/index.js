import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';
import Logo from '../../assets/logo-red.png';

export default function Header({ page }) {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>{page}</h1>
    </Container>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};
