import logo from '../assets/logo.svg';
import {HiShoppingCart} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-lime-900 py-3'>
      <div>
        <NavLink to='/'><img src={logo} alt="logo" className='w-[4rem]'/></NavLink>
      </div>
      <div className='flex items-center gap-9 text-white'>
        <NavLink to='/'><p>Home</p></NavLink>
        <NavLink to='/cart'><HiShoppingCart/></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
