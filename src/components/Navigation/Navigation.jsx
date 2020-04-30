import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Music from '../Music';
import { useSelector } from 'react-redux';

const navLoginLinks = [
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
];

const navLogoutLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Messages',
    link: '/messages',
  },
  {
    name: 'Logout',
    link: '/logout',
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
  const { token } = useSelector((state) => state.auth);
  const navLinks = token ? navLogoutLinks : navLoginLinks;
  return (
    <Nav className='nes-container is-centered'>
      {navLinks.map((link, i) => (
        <div
          className={`${link.name}` === 'Messages' ? 'nes-badge is-icon' : null}
          key={i}
        >
          <span className='is-warning'></span>
          <StyledLink to={link.link} className='navText'>
            {link.name}
          </StyledLink>
        </div>
      ))}
      <Music />
    </Nav>
  );
}

export default Navigation;
