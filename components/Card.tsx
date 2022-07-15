import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 0.5rem;
  height: 18rem;
  width: 14rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export default function Card(props: { children: any }) {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
}
