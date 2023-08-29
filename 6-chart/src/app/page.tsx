import logo from '@/assets/logo.svg';
import Image from 'next/image';
export default function Home() {
  return (
    <main className='bg-Cream h-screen text-black flex items-center'>
      <div className='flex gap-5  flex-col max-w-screen-lg m-auto w-[450px] h-[590px] '>
        <div className=' mx-5 sm:mx-0 flex justify-between p-7 rounded-2xl bg-softRed text-veryPaleOrange'>
          <div className='flex flex-col gap-1'>
            <h3 className='sm:text-sm text-xl'>My balance</h3>
            <p className=' sm:text-2xl text-3xl font-bold text-white'>
              $921.48
            </p>
          </div>
          <Image src={logo} alt='logo' />
        </div>
        <div className='mx-5 sm:mx-0 bg-veryPaleOrange flex-1 rounded-2xl flex flex-col justify-around '>
          <header className='py-6 px-7 text-[28px] text-darkBrown font-bold'>
            Spending - Last 7 days
          </header>
          <section className=' px-7  py-4 '>
            <div className='list-none flex justify-between h-[200px] [&>li]:w-[36px] sm:[&>li]:w-[46px] [&>li]:flex [&>li]:flex-col [&>li]:justify-end  [&>li]:text-center [&>li]:gap-2 [&>li]:text-mediumBrown [&>li>span]:rounded-md text-sm '>
              <li>
                <span className='bg-softRed   h-[50px]'></span>
                <p>mon</p>
              </li>
              <li>
                <span className='bg-softRed  h-[100px]'></span>
                <p>tue</p>
              </li>
              <li>
                <span className='bg-Cyan  h-[160px]'></span>
                <p>wed</p>
              </li>
              <li>
                <span className='bg-softRed  h-[90px]'></span>
                <p>thu</p>
              </li>
              <li>
                <span className='bg-softRed  h-[65px]'></span>
                <p>fri</p>
              </li>
              <li>
                <span className='bg-softRed  h-[130px]'></span>
                <p>sat</p>
              </li>
              <li>
                <span className='bg-softRed  h-[75px]'></span>
                <p>sun</p>
              </li>
            </div>
          </section>
          <div className='relative flex justify-center'>
            <hr className=' absolute w-[90%]' />
          </div>
          <footer className='flex justify-between px-7 sm:pt-5 sm:pb-12 pb-7 pt-4 text-lg sm:text-sm'>
            <div className='flex flex-col gap-4 pb-1'>
              <h3 className=' text-mediumBrown'>Total this Month</h3>
              <p className=' text-[37px] font-bold'>$478.33</p>
            </div>
            <div className='flex flex-col justify-end items-end  '>
              <p className='font-[900] text-darkBrown text-xl sm:text-sm'>
                +2.4%
              </p>
              <p className='text-mediumBrown'>front last month</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
