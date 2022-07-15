import React from 'react';
import styled from 'styled-components';

const StyledContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function ContainerCard(props: { children: any }) {
  const { children } = props;
  return <StyledContainerCard>{children}</StyledContainerCard>;
}
