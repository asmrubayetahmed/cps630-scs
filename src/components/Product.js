import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING -MIN_RATING + 1)) + MIN_RATING
    );

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gold">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>

            <div>
            <p className="text-xs my-2">{description}</p>
            </div>
            
            <button className="mt-auto button">Add to Cart</button>

        </div>
  )
}

export default Product

