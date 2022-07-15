import type { NextPage } from 'next';

import styled from 'styled-components';
import { apiGetTop10Products } from './api/apiService';
import { IProduct } from '../app/interfaces';
import Product from '../components/Product';
import Container from '../components/Container';
import Main from '../components/Main';
import ContainerCard from '../components/ContainerCard';
import Card from '../components/Card';

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <Container>
      <Main>
        <ContainerCard>
          {products.map(product => (
            <Card key={product.id}>
              <Product product={product} />
            </Card>
          ))}
        </ContainerCard>
      </Main>
    </Container>
  );
};

export default Home;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const products = await apiGetTop10Products();

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
