import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavLayout, LogoWrapper, Logo, Menu, MenuItem } from './NavbarElements';
import Container from '../Container';

import stdLogo from '../../assets/std-logo.svg';
import stdLogoTitle from '../../assets/std-logo__title.svg';

function Navbar() {
  return (
    <>
      <Nav>
        <Container>
          <NavLayout>
            <LogoWrapper>
              <Link to="/">
                <Logo src={stdLogo} alt="foobar" />
                <Logo src={stdLogoTitle} alt="foobar" />
              </Link>
            </LogoWrapper>
            <Menu>
              <MenuItem>
                <Link to="/">Add</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/dates/">Dates</Link>
              </MenuItem>
            </Menu>
          </NavLayout>
        </Container>
      </Nav>
    </>
  )
}

export default Navbar;
