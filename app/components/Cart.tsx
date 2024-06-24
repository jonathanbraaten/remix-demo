import { X } from 'phosphor-react';

type CartProps = {
  active: boolean;
  removeActive: () => void;
};
export const Cart = ({ active, removeActive }: CartProps) => {
  return (
    <div
      className={`bg-blue-500 fixed right-0 top-0 w-[25rem] h-full z-[1] ${
        active ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-5">
        <button className="" onClick={removeActive}>
          <X aria-label="close icon" size={25} />
        </button>
      </div>
    </div>
  );
};
