import logo from '../assets/images/logo.svg';
export const Header = () => {
  return (
    <header className='max-w-screen-lg w-full m-auto sm:px-0 px-10'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt='logo' className='sm:h-12 sm:w-40 h-5' />
        <div className='list-none flex sm:gap-10 gap-5 sm:text-base text-sm text-slate-300  '>
          <li className='hover:text-White hover:underline'>Features</li>
          <li className='hover:text-White hover:underline'>Team</li>
          <li className='hover:text-White hover:underline'>Sign In</li>
        </div>
      </div>
    </header>
  );
};
