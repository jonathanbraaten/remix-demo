import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import axios from 'axios';
import { addToCart } from '~/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { MetaFunction } from '@remix-run/node';

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

export const loader = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return json({ data: response.data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function Index() {
  const { data } = useLoaderData();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
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
                  onClick={() => dispatch(addToCart({ id: id, title: title }))}
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
