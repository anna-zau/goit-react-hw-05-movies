import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  gap: 15px;

  padding: 15px;
  border-bottom: 1px solid grey;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  list-style: none;
  padding: 10px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Additional = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 15px;

  border-bottom: 1px solid grey;
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;

  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid grey;

  color: #000;

  transition: all 250ms linear;

  &:hover,
  &:focus-visible {
    color: #a43d3d;
  }

  &.active {
    color: white;
    background-color: orangered;
    border: 0px;
  }
`;
