import React from 'react'
import { formatAsDollars } from '../utils'
import { useAppDispatch } from '../hooks'
import { editItem, removeItem } from '../features/cart/cartSlice'
import SelectProductAmount, { Mode } from './SelectProductAmount'
import { Button } from './ui/button'

export const FirstColumn = ({title, image}: {title:string, image:string}) => {
    return <img src={image} alt={title} className='h-24 w-24 lg:rounded sm:h-32 sm:w-32' />
}

export const SecondColumn = ({title, company, productColor}: {title:string,company:string,productColor:string}) => {
    return (
        <div className='sm:ml-4 md:ml-16 sm:w-48'>
            <h3 className='capitalize font-medium'>{title}</h3>
            <h4 className='mt-2 capitalize text-sm'>{company}</h4>
            <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
                color :
                <span
                style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: productColor,
                }}
                ></span>
            </p>
        </div>
    )
}

export const ThirdColumn = ({amount,cartid}: {amount:number, cartId:string}) => {
    const dispatch = useAppDispatch()
    const removeItemFromCart = () => {
        dispatch(removeItem(cartid))
    }

    const setAmount = (value:number) => {
        dispatch(editItem(cartid,amount:value))
    }

    return (
        <div>
          <SelectProductAmount
            amount={amount}
            setAmount={setAmount}
            mode={Mode.cartItem}
          />
          <Button variant='link' className='-ml-4' onClick={removeItemFromCart}>
            remove
          </Button>
        </div>
      );
}

export const FourthColumn = ({price}: {price:string}) => {
    return <p className='font-medium sm:ml-auto'>{formatAsDollars(price)}</p>;
}
