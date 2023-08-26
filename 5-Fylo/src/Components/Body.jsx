import hero from '../assets/images/illustration-intro.png';
import access from '../assets/images/icon-access-anywhere.svg';
import collaboration from '../assets/images/icon-collaboration.svg';
import productive from '../assets/images/illustration-stay-productive.png';
import security from '../assets/images/icon-security.svg';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';

import file from '../assets/images/icon-any-file.svg';
import { Options } from './Options';
import { Card } from './Card';
import { Formulario } from './Formulario';

export const Body = () => {
  return (
    <div className='max-w-screen-lg mx-auto w-full sm:pb-[200px] pb-[50px] '>
      <div className='flex gap-40 flex-col items-center  py-5'>
        <section className='flex flex-col items-center sm:w-[600px] w-[350px] text-center gap-10 '>
          <img src={hero} alt='hero' />
          <h2 className='text-[35px] leading-10 font-semibold'>
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className='sm:w-[500px] w-[350px] '>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>

          <button className='bg-Blue py-3 px-20 rounded-3xl hover:bg-Cyan'>
            Get Started
          </button>
        </section>

        <section className='grid sm:grid-cols-[repeat(2,360px)] w-[350px] sm:w-auto gap-24'>
          <Options
            img={access}
            title='Access your files, anywhere'
            text='The ability to use a smartphone, tablet, or
                computer to access your account means your files follow you everywhere.'
          />
          <Options
            img={security}
            title=' Security you can trust'
            text='2-factor authentication and user-controlled
                    encryption are just a couple of the security features we allow to help
                    secure your files.'
          />
          <Options
            img={collaboration}
            title='Real-time collaboration '
            text='Securely share files and folders
                  with friends, family and colleagues for live collaboration. No email
                  attachments required.'
          />
          <Options
            img={file}
            title='Store any type of file'
            text="Whether you're sharing holidays
                  photos or work documents, Fylo has you covered allowing for all file types
                  to be securely stored and shared."
          />
        </section>

        <section className='flex sm:flex-row flex-col sm:w-auto w-[350px] gap-9'>
          <img src={productive} alt='productive' className='w-[510px]' />
          <div className='flex flex-col  justify-center gap-4'>
            <h2 className='font-semibold text-[40px] leading-[50px]'>
              Stay productive, wherever you are
            </h2>
            <p className='text-[15px]'>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className='text-[15px]'>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div>
              <div className='inline  border-b-[1px] text-Cyan hover:text-white [&>p]:hover:bg-white hover:border-white border-Cyan pb-1'>
                <span className='text-[15px]'>See how Fylo works &nbsp;</span>
                <p className='w-[10px] h-[10px] inline-block bg-Cyan rounded-[50%]'></p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex gap-5 sm:flex-row flex-col w-[350px] sm:w-auto'>
          <Card
            text='Fylo has improved our team productivity by an order of magnitude. Since making
                  the switch our team has become a well-oiled collaboration machine.'
            name='Satish Patel'
            role='Founder & CEO, Huddle '
            img={profile1}
          />
          <Card
            text='Fylo has improved our team productivity by an order of magnitude. Since making
                  the switch our team has become a well-oiled collaboration machine.'
            name='Bruce McKenzie '
            role='Founder & CEO, Huddle'
            img={profile2}
          />
          <Card
            text='Fylo has improved our team productivity by an order of magnitude. Since making
                  the switch our team has become a well-oiled collaboration machine.'
            name='Iva Boyd'
            role='Founder & CEO, Huddle '
            img={profile3}
          />
        </section>

        <div className='relative bottom-[-250px]'>
          <Formulario />
        </div>
      </div>
    </div>
  );
};
