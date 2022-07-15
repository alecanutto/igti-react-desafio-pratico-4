import Link from 'next/link';
import styled from 'styled-components';
import { IProduct } from '../app/interfaces';
import Title from './Title';

const StyledItem = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 10rem;
`;

const StyledCategory = styled.p`
  text-align: center;
  font-weight: 600;

  font-size: 1rem;
  line-height: 1.25rem;

  padding: 0.5rem;
  color: #fff;
  background-color: #363636;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

function handle() {}

export default function Product(props: { product: IProduct }) {
  const { id, title, image, category } = props.product;
  return (
    <Link href={`/products/${id}`}>
      <StyledLink>
        <StyledItem onClick={handle}>
          <StyledImg src={image} alt={title} />
          <Title title={title} />
          <StyledCategory>{category}</StyledCategory>
        </StyledItem>
      </StyledLink>
    </Link>
  );
}
