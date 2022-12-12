import * as React from 'react';
import styled from 'styled-components';

type MyProps = {
  onClick?: (any) => void;
  children: React.ReactNode;
};

const Button = styled.button`background: ${(props) =>
  props.primary ? 'palevioletred' : 'white'};
color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px; cursor: pointer`;

const StyledButton: React.FC<MyProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default StyledButton;
