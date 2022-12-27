import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  padding: 4px;
  min-width: 80px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
