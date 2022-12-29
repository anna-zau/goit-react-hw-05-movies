import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  margin-top: 15px;
  padding: 20px;
`;

export const ListCast = styled.ul`
  display: block;
`;

export const ItemCast = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 100%;
  margin-top: 20px;
  padding: 5px;

  border: 1px solid grey;

  &:first-child {
    margin-top: 0;
  }
`;

export const TextCast = styled.p`
  display: block;
  margin-top: 5px;
  text-align: center;
`;
