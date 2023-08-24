import logo from './assets/images/logo.svg';
import gaming from './assets/images/image-gaming-growth.jpg';
import retro from './assets/images/image-retro-pcs.jpg';
import laptops from './assets/images/image-top-laptops.jpg';
import { News } from './Components/News';
import desktop from './assets/images/image-web-3-desktop.jpg';
import mobile from './assets/images/image-web-3-mobile.jpg';
import { Box } from './Components/Box';
import { useState, useEffect } from 'react';
import open from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';
function App() {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  // console.log(widthSize, widthSize > 800);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='bg-white sm:h-screen sm:grid  grid-rows-[100px,1fr] '>
      <header className='relative max-w-screen-xl m-auto flex justify-between w-full py-5 px-5 sm:mb-0 mb-2'>
        <img src={logo} alt='logo' className='w-[50px] sm:w-auto' />
        <div className='text-Neutral-DarkHrayishBlue sm:flex hidden  gap-8 items-center list-none '>
          <li className='hover:text-primary-SoftRed cursor-pointer'>Home</li>
          <li className='hover:text-primary-SoftRed cursor-pointer'>New</li>
          <li className='hover:text-primary-SoftRed cursor-pointer'>Popular</li>
          <li className='hover:text-primary-SoftRed cursor-pointer'>
            Trending
          </li>
          <li className='hover:text-primary-SoftRed cursor-pointer'>
            Categories
          </li>
        </div>
        <div className='sm:hidden flex  '>
          <img src={open} onClick={() => setToggle(!toggle)} alt='open' />
          {toggle && (
            <div
              onClick={() => setToggle(!toggle)}
              className='fixed bg-opacity-30 min-h-screen h-full w-screen right-0 flex justify-end top-0 bg-black '
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className='w-[65%] bg-white flex flex-col p-6'
              >
                <div className='flex justify-end  '>
                  <img
                    src={close}
                    onClick={() => setToggle(!toggle)}
                    alt='open'
                    className='w-[35px] h-[35px] mb-16'
                  />
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='text-black list-none flex flex-col gap-5 text-xl font-semibold'
                >
                  <li onClick={() => setToggle(!toggle)}>Home</li>
                  <li onClick={() => setToggle(!toggle)}>New</li>
                  <li onClick={() => setToggle(!toggle)}>Popular</li>
                  <li onClick={() => setToggle(!toggle)}>Trending</li>
                  <li onClick={() => setToggle(!toggle)}>Categories</li>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className='max-w-screen-xl mx-auto text-Neutral-DarkHrayishBlue px-5'>
        <div className='flex gap-7 lg:flex-row flex-col'>
          <div className='flex flex-col gap-8 w-full'>
            <img src={widthSize >= 768 ? desktop : mobile} alt='fondoimg' />
            <div className='flex sm:gap-8 gap-3 justify-between sm:flex-row flex-col '>
              <p className='sm:text-clamp xl:text-[57px] font-[800] leading-[60px] w-[360px] text-Neutral-VeryDarkBlue text-[45px]'>
                The Bright Future of Web 3.0?
              </p>
              <div className='flex flex-col justify-between sm:w-[380px] sm:relative right-[40px] sm:gap-0 gap-7 mb-10 sm:mb-0 text-xl sm:text-base'>
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <div>
                  <button className='text-white hover:bg-Neutral-VeryDarkBlue bg-primary-SoftRed px-10 text-lg py-4 sm:py-3 uppercase tracking-[0.2rem]'>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-Neutral-VeryDarkBlue px-5 py-7  sm:w-[450px] '>
            <h2 className='text-[35px] font-[600] text-primary-SoftOrange'>
              New
            </h2>
            <div className='sm:w-[320px]'>
              <News
                title='Hydrogen VS Electric Cars'
                text='Will hydrogen-fueled cars ever catch up to EVs?'
              />
              <hr className='opacity-30' />
              <News
                title='The Downsides of AI Artistry'
                text='What are the possible adverse effects of on-demand AI image generation?'
              />
              <hr className='opacity-30' />
              <News
                title='Is VC Funding Drying Up?'
                text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
              />
            </div>
          </div>
        </div>
        <div className='grid  sm:grid-cols-[360px,380px,360px] sm:pt-14 py-5 sm:py-0 pt-10 md:gap-[70px] sm:gap-5 gap-8'>
          <Box
            img={retro}
            number='01'
            title='Reviving Retro PCs'
            text='What happens when old PCs are given modern upgrades?'
          />
          <Box
            img={laptops}
            number='02'
            title='Top 10 Laptops of 2022'
            text='Our best picks for various needs and budgets.'
          />
          <Box
            img={gaming}
            number='03'
            title='The Growth of Gaming'
            text='How the pandemic has sparked fresh opportunities.'
          />
        </div>
      </main>
    </div>
  );
}

export default App;

// 01     03
