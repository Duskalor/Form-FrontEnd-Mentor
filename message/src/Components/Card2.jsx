import iconList from '../assets/images/icon-list.svg';
import { useForm } from '../hook/useForm';

export const Card2 = () => {
  const { text, setValid } = useForm();
  return (
    <div className=' h-screen sm:h-[360px] bg-white text-DarkSlateGrey sm:w-[350px] rounded-3xl'>
      <div className='p-10 sm:flex flex-col gap-2 grid grid-rows-[1fr,50px] h-full items-center'>
        <div className='flex flex-col '>
          <img
            src={iconList}
            alt='icono'
            className='sm:w-[45px] w-[60px] sm:pb-0 pb-5'
          />
          <div className='pt-2'>
            <h2 className='text-[40px] font-bold h-10'>Thanks for </h2>
            <h2 className='text-[40px] font-bold '>subscribing!</h2>
          </div>
          <p className='text-[12px] sm:pt-0 pt-4'>
            A confirmation email has been sent to <strong>{text}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button
          onClick={() => setValid(true)}
          className='bg-DarkSlateGrey hover:bg-Tomato h-10 mt-2 rounded-md w-full text-white font-medium'
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

{
  /*   */
}
