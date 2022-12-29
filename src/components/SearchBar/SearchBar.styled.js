import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 5px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 5px;
`;

export const Button = styled.button`
  display: block;

  background-color: white;
  border: 1px solid grey;

  border-radius: 4px;

  &:hover,
  :active {
    color: white;
    background-color: orangered;
    border: 0px;
  }
`;
