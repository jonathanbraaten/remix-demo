import { useSelector, useDispatch } from 'react-redux';
export const CartItems = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <ul className="bg-blue-200">
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};
