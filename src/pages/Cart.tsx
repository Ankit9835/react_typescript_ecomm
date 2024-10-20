import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { CartItems, SectionTitle } from '../components';
import CartTotal from '../components/CartTotal';

function Cart() {
  const user = null
  const numInCart = useAppSelector((state) => state.cartState.numInCart)

  if(numInCart === 0){
    <SectionTitle text='Empty cart ☹️' />
  }
  
    return (
      <>
        
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItems />
        </div>
        <div className='lg:col-span-4'>
          <CartTotal />
          {user ? (
            <Button asChild className='mt-8 w-full'>
            <Link to='/checkout'>Proceed to checkout</Link>
          </Button>
          ) : (
            <Button asChild className='mt-8 w-full'>
              <Link to='/login'>Please Login</Link>
            </Button>
          )}
        </div>
      </div>
      </>
      
    )
}
export default Cart;