import React from 'react';

import styled from 'styled-components';

const Label = styled.label`
  color: white;
`;

const Input = styled.input`
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #5a7352;
  margin-left: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function AuthForm({
  values,
  handleSubmit,
  handleChange,
  handleReset,
  pathname,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(values).map((key, i) => (
        <div key={i} className={'nes-field'}>
          <Label htmlFor={key}>
            {key === 'username'
              ? 'Username'
              : key === 'password2'
              ? 'Confirm Password'
              : 'Password'}
          </Label>
          <Input
            type={key === 'username' ? 'text' : 'password'}
            id={key}
            name={key}
            value={values[key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <ButtonContainer>
        <button type='button' onClick={handleReset} className='nes-btn'>
          Reset
        </button>
        <Button type='submit' className='nes-btn'>
          {pathname === '/login' ? 'Login' : 'Register'}
        </Button>
      </ButtonContainer>
    </form>
  );
}

export default AuthForm;
