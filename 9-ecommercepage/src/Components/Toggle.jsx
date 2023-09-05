import close from '../assets/images/icon-close2.svg';
import { navbar } from '../utils/navbar';
export const Toggle = ({ setToggle }) => {
  return (
    <section
      onClick={() => setToggle(false)}
      className='fixed top-0 right-0 left-0  bottom-0 bg-black/70 z-50 '
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className='bg-white h-full w-[68%] flex flex-col gap-10 p-8 '
      >
        <div>
          <img src={close} alt='close' onClick={() => setToggle(false)} />
        </div>
        <ul className='flex flex-col gap-6'>
          {navbar.map((nav, i) => {
            return (
              <li
                onClick={() => setToggle(false)}
                key={i}
                className='text-lg font-bold'
              >
                <a href='#'>{nav}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
