import React from 'react';
import Image from "next/image";
import {
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon, 
    ShoppingCartoon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from '../slices/basketSlice';

function Header() {
  const router = useRouter();
  //const items = useSelector(selectItems);

  return (
    <header>
 {/* Top nav */} 
        <div class="flex items-center bg-black p-1 flex-grow py-2">
            <div>
                <Image 
                onClick={() => router.push('/')}                
                src='/../public/logo.jpg'
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>

{/*Search bar */}

            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
            <SearchIcon className="h-12 p-4 " />
        </div>
      
{/* Right side of navbar */}
    <div className="text-white flex items-center text-xs space-x-6 mx-6"> 
    <div className="link">
      <p className="font-extrabold md:text-sm">About us</p>
    </div>

    <div className="link">
      <p className="font-extrabold md:text-sm">Contact</p>
    </div>

    <div className="link">
    <p onClick={() => router.push('/signup')} className="font-extrabold md:text-sm">Sign up</p>
    </div>

    <div className="relative link flex items-center"> 
    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
      0
    </span>
      <ShoppingCartIcon onClick={() => router.push('/checkout')} className="h-10"/> 
      <p onClick={() => router.push('/checkout')} className="font-extrabold md:text-sm">Cart</p>
    </div>
        
    </div>
    </div>

{/* Bottom nav */}
        <div className="flex items-center space-x-3 p-2 bg-light text-white text-sm">
          <p className="link flex items-center "> 
            <MenuIcon className="h-6 mr-1"/>
            All</p>
            <p className="link"> 
              Furniture
            </p>
            <p className="link"> 
              Kitchen
            </p>
            <p className="link"> 
            Electronics
            </p>
            <p className="link hidden lg:inline-flex"> 
            Appliances
            </p>
            <p className="link hidden lg:inline-flex"> 
            Beauty
            </p>
            <p className="link hidden lg:inline-flex"> 
            Clothes
            </p>
            <p className="link hidden lg:inline-flex"> 
            Shoes
            </p>
            <p className="link"> 
            Food & Grocery
            </p>
        </div>
    </header>
  )
}

export default Header