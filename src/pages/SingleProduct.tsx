import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from '@/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { type LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(`products/${params.id}`)
  return {...response.data}
};

const SingleProduct = () => {
  const {data: product} = useLoaderData() as SingleProductResponse
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  return (
    <div>
      SingleProduct
    </div>
  )
}

export default SingleProduct
