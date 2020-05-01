import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { ActionsContext } from '../../contexts/ActionsContext';
import AuthForm from './AuthForm';
import background from '../../assets/images/background.png';

import styled, { keyframes } from 'styled-components';
import {useSelector} from "react-redux";

const backgroundAnimation = keyframes`
from{background-position: 0, 0}
to{background-position: 1200px, 0}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 87vh;
  background-image: url(${background});
  background-position: center;
  background-repeat-y: no-repeat;
  background-size: cover;
  animation-name: ${backgroundAnimation};
  animation-duration: 240s;
  animation-count: infinite;
`;

const Forms = styled.div`
  margin-top: 10%;
`;

const loginState = {
  username: '',
  password: '',
};

const registerState = {
  username: '',
  password1: '',
  password2: '',
};

function Auth({history: {push}}) {
  const {token} = useSelector(state => state.auth);
  const actions = useContext(ActionsContext);
  const loc = useLocation();
  const initialState = loc.pathname === '/login' ? loginState : registerState;
  const [values, handleChange, handleSubmit, handleReset, setValues] = useForm(
    initialState,
    doSubmit
  );

  useEffect(()=> {
    if (token) {
      push('/');
    }
  }, [token])

  useEffect(() => {
    if (loc.pathname === '/login') {
      setValues(loginState);
    } else {
      setValues(registerState);
    }
  }, [loc.pathname]);

  function doSubmit() {
    loc.pathname === '/login'
      ? actions.auth.login(values)
      : actions.auth.register(values);
  }

  return (
    <Container>
      <Forms>
        <AuthForm
          handleChange={handleChange}
          values={values}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          pathname={loc.pathname}
        />
      </Forms>
    </Container>
  );
}

export default Auth;
