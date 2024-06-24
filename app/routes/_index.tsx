import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import axios from 'axios';
import { addToCart, fetchItems } from '~/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
type ResponseData = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const data = useSelector((state) => state.cart.items);
  const storage = useSelector((state) => state.cart.cart);
  console.log(storage);

  return (
    <div className="font-sans index-grid">
      {data.map(
        ({ id, title, price, category, description, rating, image }) => (
          <article className="border  rounded-md p-5" key={id}>
            <div className="w-full  relative h-[40vh]">
              <img
                className="object-cover absolute aspect-auto  w-full h-full bg-orange-500 block "
                src={image}
                alt="product"
              ></img>
            </div>
            <div className="flex m-2 flex-col gap-5">
              <p className=" max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </p>
              <div className="flex gap-10 ">
                <p>${price}</p>
                <button
                  onClick={() => dispatch(addToCart(id))}
                  className="border px-2 py-1 rounded-md"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  );
}
