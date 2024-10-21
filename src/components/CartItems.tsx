import React from 'react'
import { useAppSelector } from '@/hooks';
import { Card } from './ui/card';
import { FirstColumn, FourthColumn, SecondColumn, ThirdColumn } from './CartItemsColumns';

const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartItems)
  return (
    <div>
    {cartItems.map((cartItem) => {
        const { cartID, title, price, image, amount, company, productColor } =
        cartItem;
        return (
            <Card
            key={cartID}
            className='flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8'
          >
            <FirstColumn title={title} image={image}/>
            <SecondColumn title={title} company={company} productColor={productColor}/>
            <ThirdColumn />
            <FourthColumn price={price}/>
          </Card>
        )
    })}
    </div>
  )
}

export default CartItems