import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/Cloud.png';
// import { Container } from './styles';

export default function Login() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo" width="120px" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
