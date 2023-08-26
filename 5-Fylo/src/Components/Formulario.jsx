export const Formulario = () => {
  return (
    <div className='absolute left-[50%] w-[350px] sm:top-[-160px] top-[-350px] rounded-lg translate-x-[-50%] bg-emailSignUp sm:w-[760px] sm:h-[270px]'>
      <div className='flex flex-col justify-around h-full text-center py-5 px-9'>
        <h3 className='text-[34px] font-bold '>Get early access today</h3>
        <p className='text-[15px] px-6 pb-3 sm:pb-0'>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className='flex justify-between sm:flex-row flex-col  gap-8 p-2'>
          <input
            type='text'
            className='bg-white  flex-1 pl-8 py-3 sm:py-0  rounded-3xl text-black'
            placeholder='email@example.com '
          />
          <button className='px-8 py-4 hover:bg-Cyan bg-Blue rounded-3xl text-xs'>
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};
