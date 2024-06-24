import { NavLink } from '@remix-run/react';
import { ShoppingCart } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { Cart } from './Cart';
import { useState } from 'react';
import { RootState } from '~/slices/cartSlice';

export const Navigation = () => {
  const items: number = useSelector((state: RootState) => state.cart.quantity);
  const [active, setActive] = useState(false);
  const handleActive = () => setActive(true);
  const removeActive = () => setActive(false);
  return (
    <nav className="flex gap-5 items-center">
      <ul className="flex gap-5">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Contact</NavLink>
        </li>
      </ul>
      <button className="relative" onClick={handleActive}>
        <span
          className={`${
            items > 0 ? 'block' : 'hidden'
          }  absolute -top-[10px] -right-[10px] bg-slate-50 w-[20px] h-[20px] text-xs rounded-full border`}
        ></span>
        <ShoppingCart aria-label="cart icon" size={25} />
      </button>
      <Cart removeActive={removeActive} active={active} />
    </nav>
  );
};
