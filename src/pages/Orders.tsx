import React from 'react'
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
;
import { customFetch } from '@/utils';
import {
  OrderList,
  ComplexPaginationContainer,
  SectionTitle,
} from '@/components';
import { ReduxStore } from '@/store';
import { OrdersResponse } from '/@utils';

export const loader = (store:ReduxStore): LoaderFunction => 
        async ({request}): Promise<OrdersResponse | Response | null> => {
          const user = store.getState().userState.user
          if(!user) return redirect('/login')
            const params = Object.fromEntries([
              ...new URL(request.url).searchParams.entries(),
            ]);

            try {
              const response = await customFetch.get<OrdersResponse>('/orders', {
                params,
                headers:{
                  Authorization: `Bearer ${user.jwt}`,
                }
              })
              console.log('response', response)
              return {...response.data}
            } catch (error) {
              console.log(error)
              return null
            }
        }

const Orders = () => {
  const {meta} = useLoaderData() as OrdersResponse
  if(meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
}

export default Orders
