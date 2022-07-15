import React from 'react';
import useSWR from 'swr';
import { IProduct } from '../../app/interfaces';
import { URL_BASE } from '../../app/share';
import Container from '../../components/Container';
import Main from '../../components/Main';
import ContainerCard from '../../components/ContainerCard';
import ItemDetails from '../../components/ItemDetails';
import { apiGetProduct, apiGetTop10Products } from '../api/apiService';
import styled from 'styled-components';
import Link from 'next/link';

const StyledContainerDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 5rem;
`;

const StyledButton = styled.button`
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.5rem;
  width: 5rem;
  color: #fff;
  background-color: #363636;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export async function getStaticPaths() {
  const products = await apiGetTop10Products();
  const paths = products.map(product => ({
    params: { id: String(product.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Props) {
  const { id } = params;
  const product = await apiGetProduct(id);

  return {
    props: { ...product },
  };
}

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetails(props: IProduct) {
  const { data: product } = useSWR(
    'product',
    () => fetch(`${URL_BASE}/products/${props.id}`).then(res => res.json()),
    {
      fallbackData: props,
    }
  );

  return (
    <>
      {product && (
        <Container>
          <Main>
            <ContainerCard>
              <ItemDetails product={product} />
            </ContainerCard>
          </Main>
          <Link href={'/'}>
            <StyledContainerDiv>
              <StyledButton>Back</StyledButton>
            </StyledContainerDiv>
          </Link>
        </Container>
      )}
    </>
  );
}
