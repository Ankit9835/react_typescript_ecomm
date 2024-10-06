import { Form, useLoaderData, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { type ProductResponseWithParams } from '../utils';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import { FormCheckBox } from '.';


function Filters() {
  const {meta,params} = useLoaderData() as ProductResponseWithParams
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
     <FormInput name='search' type='search'  label='search product' defaultValue={search} />
     
      <FormSelect
        label='select category'
        name='category'
        options={meta.categories}
        defaultValue={category}
      />
     
      <FormSelect
        label='select company'
        name='company'
        options={meta.companies}
        defaultValue={company}
      />
      
      <FormSelect
        label='order by'
        name='order'
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      
      <FormRange name='price' label='price' defaultValue={price} />

      <FormCheckBox name='shipping' label='shipping' defaultValue={shipping} />

      <Button type='submit' size='sm' className='self-end mb-2'>
        search
      </Button>
      <Button
        type='button'
        asChild
        size='sm'
        variant='outline'
        className='self-end mb-2'
      >
        <Link to='/products'>reset</Link>
      </Button>
    </Form>
  );
}
export default Filters;