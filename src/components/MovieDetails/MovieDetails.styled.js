import styled from 'styled-components';

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
