import iconCart from '../assets/images/icon-cart.svg';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import menu from '../assets/images/icon-menu.svg';

import { Cart } from './Cart';
import { useStore } from '../store/store';
import { navbar } from '../utils/navbar';
import { sizeSelected, useWidth } from '../hooks/useWidth';
import { useState } from 'react';
import { Toggle } from './Toggle';
export const MainHeader = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useStore((store) => store.cart);
  const active = useStore((store) => store.active);
  const setActive = useStore((store) => store.setActive);
  const { width } = useWidth();
  const itemsCount = cart.reduce(
    (contador, product) => contador + product.count,
    0
  );
  const handleToggle = () => setToggle(true);
  return (
    <header className='px-5  max-w-screen-xl m-auto w-full flex justify-between sm:border-b-2 sm:py-0 py-4 h-full'>
      <nav className='flex sm:gap-20 gap-5 items-center'>
        {width < sizeSelected && (
          <img src={menu} onClick={handleToggle} alt='menu' className='w-4' />
        )}
        {width < sizeSelected && toggle && <Toggle setToggle={setToggle} />}
        <div>
          <img src={logo} alt='logo' className='sm:w-auto  w-30' />
        </div>
        {width > sizeSelected && (
          <div className='flex list-none gap-8 text-DarkGrayishBlue h-full '>
            {navbar.map((nav, i) => (
              <li
                key={i}
                className='flex items-center hover:border-Orange border-b-4 border-LightGrayishBlue'
              >
                <a href='#' className='hover:text-black  '>
                  {nav}
                </a>
              </li>
            ))}
          </div>
        )}
      </nav>
      <nav className='flex items-center sm:gap-12 gap-2 lg:relative'>
        <Cart active={active} />
        <div
          onClick={setActive}
          className='relative w-10 h-10 flex items-center justify-center'
        >
          {itemsCount > 0 && (
            <span className='absolute right-[1px] top-[3px] text-[10px] text-center bg-Orange text-white w-5 h-[14px] rounded-xl'>
              {itemsCount}
            </span>
          )}
          <img src={iconCart} alt='cart' className='cursor-pointer' />
        </div>
        <img
          src={avatar}
          alt='avatar'
          className='sm:w-14  w-7 cursor-pointer hover:border-Orange border-2 rounded-[50%]'
        />
      </nav>
    </header>
  );
};
