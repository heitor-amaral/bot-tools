import React from 'react';

import logo from '../../assets/Cloud.png';
// import { Container } from './styles';

export default function Login() {
  function handleLogin() {}

  return (
    <>
      <img src={logo} alt="Logo" width="120px" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit" onClick={handleLogin}>
          Acessar
        </button>
      </form>
    </>
  );
}
