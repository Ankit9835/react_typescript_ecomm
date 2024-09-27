import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import { customFetch, type ProductResponse } from '../utils'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'


const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
  const response = await customFetch<ProductResponse>(url);
  return { ...response.data };
};


const Landing = () => {
  const result = useLoaderData() as ProductResponse;
  console.log(result);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
