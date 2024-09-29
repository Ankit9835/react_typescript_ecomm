import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { customFetch, type ProductResponse } from '../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
  const response = await customFetch<ProductResponse>(url);
  console.log(response)
  return { ...response.data };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;