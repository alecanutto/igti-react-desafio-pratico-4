import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  border: solid 1px #d8d7d7;
  margin: 2rem 0;
  padding: 1rem;
`;

export default function Main(props: { children: any }) {
  const { children } = props;
  return <StyledMain>{children}</StyledMain>;
}
