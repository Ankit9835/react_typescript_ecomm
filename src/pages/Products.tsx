import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { customFetch, type ProductResponse } from '../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader: LoaderFunction = async ({request}): Promise<ProductResponse> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch<ProductResponse>(url, {params});
  return { ...response.data,  params};
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