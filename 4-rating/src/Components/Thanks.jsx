import you from '../assets/images/illustration-thank-you.svg';
import { useRated } from '../context/useRated';
export const Thanks = () => {
  const { selected, handleActions } = useRated();
  return (
    <div className='flex flex-col justify-around h-full py-2 '>
      <div className='flex flex-col items-center gap-8'>
        <img src={you} alt='you' className='w-[200px]' />
        <h3 className='text-lg text-Orange bg-DarkBlue rounded-3xl py-2 px-5'>
          You Selected {selected} out of 5
        </h3>
      </div>
      <div className='flex flex-col gap-1'>
        <h2
          className='text-3xl text-center font-bold'
          onClick={() => {
            handleActions({ active: null, selected: null });
          }}
        >
          Thank you!
        </h2>
        <p className='text-center text-lg text-LightGrey'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

//
