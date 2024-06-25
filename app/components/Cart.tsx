import { X } from 'phosphor-react';
import { CartItems } from './CartItems';
import { useSelector, useDispatch } from 'react-redux';

type CartProps = {
  active: boolean;
  removeActive: () => void;
};
export const Cart = ({ active, removeActive }: CartProps) => {
  return (
    <div className={`bg-blue-500 fixed right-0 top-0 w-[25rem] h-full z-[1]`}>
      <div className="flex justify-end p-5">
        <button className="" onClick={removeActive}>
          <X aria-label="close icon" size={25} />
        </button>
      </div>

      <CartItems />
    </div>
  );
};

/* ${
        active ? 'translate-x-0' : 'translate-x-full'
      }*/
