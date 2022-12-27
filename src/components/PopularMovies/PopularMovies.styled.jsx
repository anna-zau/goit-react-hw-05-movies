import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  justify-content: center;
  padding: 10px;

  list-style: none;
`;

export const Item = styled.li`
  /* border: 1px solid black; */
  max-width: 200px;
  /* height: 280px; */

  padding: 5px;

  transition: all 250ms linear;

  &:hover,
  &:focus-visible {
    scale: 1.1;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.26);
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-decoration: none;
`;

export const Text = styled.p`
  display: block;
  text-align: center;

  color: black;
`;
