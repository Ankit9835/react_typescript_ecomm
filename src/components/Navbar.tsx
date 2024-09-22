import CartButton from './CartButton';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import ModeToggle from './ModeToggle';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLink />
        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;