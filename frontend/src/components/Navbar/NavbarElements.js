import styled from 'styled-components';
import { devices } from '../../devices';

/**
 * Mobile
 * menu logo height: 35px; 
 * Smaller font size for menuItem
 * Just go onto a new line... like piccalili.li
 */

export const Nav = styled.nav`
  background: #1050D6;
  color: #fff;
  padding-top: var(--size-400); 
  padding-bottom: var(--size-400); 
`;

export const NavLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.fromTablet} { 
    flex-wrap: nowrap;
  }
`;

export const LogoWrapper = styled.div`
  a {
    display: flex; 
    align-items: center;
    margin-bottom: var(--size-400);
  }

  @media ${devices.fromTablet} {
    flex-basis: 50%;
  
    a {
      margin-bottom: 0;
    }
  }
`;

export const Logo = styled.img`
  height: 38px; 
  width: auto;
  margin-right: var(--size-100);
`;

export const Menu = styled.div`
  display: flex; 
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  @media ${devices.fromTablet} {
    justify-content: flex-end;
  }
`;

export const MenuItem = styled.div`
  a {
    font-size: var(--size-400);
    font-weight: 300; 
    cursor: pointer;
    font-family: Arial;
    border-bottom: 2px solid transparent; 
    color: #fff; 
    text-decoration: none;
  }

  @media ${devices.fromTablet} {
    a {
      font-size: var(--size-500);
    }
  }
 
  margin-right: var(--size-300);

  @media ${devices.fromTablet} {
    margin-left: var(--size-300);
    margin-right: 0;
  }

  a:hover,
  a:active {
    border-color: var(--color-secondary);
  }
`;
