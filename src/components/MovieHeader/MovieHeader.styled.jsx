import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: block;
  padding: 5px;
  box-shadow: 0px 3px 5px 0px rgba(183, 171, 171, 0.58);
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;

  padding: 8px 16px;
  border-radius: 4px;

  color: #000;

  transition: all 250ms linear;

  &:hover,
  &:focus-visible {
    color: #a43d3d;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
