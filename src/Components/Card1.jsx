import { useEffect } from 'react';
import iconList from '../assets/images/icon-list.svg';
import desktop from '../assets/images/illustration-sign-up-desktop.svg';
import mobile from '../assets/images/illustration-sign-up-mobile.svg';
import { useForm } from '../hook/useForm';
import { useState } from 'react';

export const Card1 = () => {
  const { text, error, setError, HandleValidate, handleText } = useForm();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex bg-white sm:flex-row flex-col-reverse sm:h-[600px] sm:p-5 pb-2 text-DarkSlateGrey  sm:rounded-[35px]  h-full '>
      <div className='flex flex-col  sm:p-10 sm:gap-4 gap-2 max-w-[440px] text-[16px] p-5  '>
        <h1 className='sm:text-[55px] font-bold text-[35px]'>Stay updated!</h1>
        <p className='font-medium sm:pb-1'>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className='flex flex-col gap-2 font-medium'>
          <li className='flex gap-4'>
            <img src={iconList} alt={'list'} />
            <p>Product discovery and building what matters</p>
          </li>
          <li className='flex gap-4'>
            <img src={iconList} alt={'list'} />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className='flex gap-4'>
            <img src={iconList} alt={'list'} />
            <p>And much more!</p>
          </li>
        </div>

        <div className='sm:mt-7'>
          <div className='flex justify-between'>
            <label className='text-[11px] font-bold'>Email address</label>
            {error && (
              <label className='text-[11px] font-bold text-Tomato'>
                {error}
              </label>
            )}
          </div>
          <div className='flex flex-col gap-3 mt-1'>
            <input
              onKeyDown={(e) => {
                if (e.key === 'Enter') HandleValidate();
              }}
              value={text}
              onClick={() => error && setError(null)}
              onChange={handleText}
              placeholder='email@company.com'
              className={`h-14 ${
                error
                  ? 'border-Tomato text-Tomato bg-red-100'
                  : 'border-Grey text-black bg-white'
              } rounded-md px-4    border-[1px] `}
            />
            <button
              onClick={HandleValidate}
              className='bg-DarkSlateGrey hover:bg-Tomato h-14 mt-2 rounded-md text-white font-medium'
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
      <img
        src={windowWidth <= 768 ? mobile : desktop}
        className='h-[50px] sm:h-full flex-1  sm:flex-0'
        alt='desktop'
      />
    </div>
  );
};
