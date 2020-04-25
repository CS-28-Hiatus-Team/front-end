import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const navLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Login',
        link: '/login',
    },
    {
        name: 'Register',
        link: '/register'
    }
];

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

function Navigation() {
    return (
        <Nav className="nes-container is-centered">
            {navLinks.map((link, i)=> <NavLink to={link.link} className="nes-text is-primary">{link.name}</NavLink>)}
        </Nav>
    )
}

export default Navigation;
