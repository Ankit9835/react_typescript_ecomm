import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export enum Mode  {
  SingleProduct =  'singleProduct',
  cartItem = 'cartItem'
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct,
  amount:number,
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

type SelectCartAmountProps = {
  mode: Mode.cartItem,
  amount:number,
  setAmount: (value: number) => void;
}

const SelectProductAmount = ({mode,amount,setAmount}: SelectProductAmountProps | SelectCartAmountProps) => {
  const cartItem = mode === Mode.cartItem
  return (
    <>
      <h4 className='font-medium mb-2'>Amount :</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className={cartItem ? 'w-[75px]' : 'w-[150px]'}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
              <SelectItem key={index} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectProductAmount
