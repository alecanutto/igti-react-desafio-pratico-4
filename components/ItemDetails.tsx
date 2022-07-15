import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../app/interfaces';
import { formatValue } from '../app/share';

const StyledCardImage = styled.div`
  margin: 0.5rem;
  height: 18rem;
  width: 15rem;
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

const StyledImg = styled.img`
  width: 15rem;
  height: 18rem;
`;

const StyledCardDetails = styled.div`
  margin: 0.5rem;
  height: 18rem;
  width: 40rem;
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

const StyledTitle = styled.div`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledDescription = styled.div`
  font-size: 1rem;
  text-align: justify;
`;

const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
`;

const StyledDiv = styled.div<Props>`
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.5rem;
  color: #fff;
  background-color: #363636;

  font-size: ${props => props.size};
`;

interface Props {
  size?: string;
}

export default function ItemDetails(props: { product: IProduct }) {
  const { image, title, description, price, category } = props.product;
  return (
    <>
      <StyledCardImage>
        <StyledImg src={image} alt={title} />
      </StyledCardImage>
      <StyledCardDetails>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledContainerDiv>
          <StyledDiv>{category}</StyledDiv>
          <StyledDiv size="2rem">{formatValue(price)}</StyledDiv>
        </StyledContainerDiv>
      </StyledCardDetails>
    </>
  );
}
