import logo from '../assets/images/logo.svg';
import location from '../assets/images/icon-location.svg';
import email from '../assets/images/icon-email.svg';
import phone from '../assets/images/icon-phone.svg';
import { Contact } from './Contact';
export const Footer = () => {
  return (
    <footer className='bg-footer pt-40 sm:p-20  '>
      <div className='max-w-screen-lg m-auto h-full flex items-center '>
        <div className='flex flex-col gap-9 w-full relative top-14'>
          <img src={logo} alt='logo' className='h-12 w-40 pl-4' />
          <div className='flex gap-9 text-[15px] sm:flex-row flex-col justify-between'>
            <section className='sm:w-[350px] flex gap-6 sm:px-0 px-4'>
              <div className='pt-2'>
                <img src={location} alt='location' className='h-5 w-10 ' />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </section>

            <section className='flex flex-col  px-4  gap-4'>
              <Contact icon={phone} text='+1-543-123-4567' />
              <Contact icon={email} text='example@fylo.com' />
            </section>

            <section className='list-none px-3 flex flex-col gap-2'>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                About Us
              </li>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Jobs
              </li>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Press
              </li>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Blog
              </li>
            </section>

            <section className='list-none px-4 flex flex-col gap-2'>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Contact Us
              </li>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Terms
              </li>
              <li className='text-slate-400 hover:text-white cursor-pointer'>
                Privacy
              </li>
            </section>

            <section className='flex gap-5 justify-center '>
              <Contact icon={phone} />
              <Contact icon={location} />
              <Contact icon={email} />
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};
