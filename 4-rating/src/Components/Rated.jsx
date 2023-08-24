import { Buttons } from './Buttons';
import logo from '../assets/images/icon-star.svg';
import { useRated } from '../context/useRated';

export const Rated = () => {
  const { handleActions, selected } = useRated();
  return (
    <div className='p-3 flex flex-col justify-between h-full'>
      <div className='w-[53px] mb-1 h-[53px] rounded-[50%] items-center flex justify-center bg-DarkBlue'>
        <img src={logo} alt={'logo'} className='w-[20px]' />
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-3xl font-semibold'>How did we do ?</h2>
        <p className='text-MediumGrey font-medium'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <Buttons />
      <div className='items-center flex justify-center'>
        <button
          onClick={() =>
            handleActions((prev) => ({ ...prev, active: selected }))
          }
          className='p-2 text-lg uppercase hover:bg-white w-full rounded-3xl bg-Orange hover:text-Orange font-bold tracking-widest'
        >
          Submit
        </button>
      </div>
    </div>
  );
};
