import { NavLink } from '@remix-run/react';
import { ShoppingCart } from 'phosphor-react';

import { Cart } from './Cart';
import { useState } from 'react';
export const Navigation = () => {
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
      <button onClick={handleActive}>
        <ShoppingCart aria-label="cart icon" size={25} />
      </button>
      <Cart removeActive={removeActive} active={active} />
    </nav>
  );
};
