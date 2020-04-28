import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Music from '../Music';

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Login',
    link: '/login',
  },
  {
    name: 'Register',
    link: '/register',
  },
  {
    name: 'Messages',
    link: '/messages',
  },
];

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: #151826;
`;

const StyledLink = styled(NavLink)`
  color: white;
`;

function Navigation() {
  return (
    <Nav className='nes-container is-centered'>
      {navLinks.map((link, i) => (
        <StyledLink to={link.link} className='navText'>
          {link.name}
        </StyledLink>
      ))}
      <Music />
    </Nav>
  );
}

export default Navigation;
