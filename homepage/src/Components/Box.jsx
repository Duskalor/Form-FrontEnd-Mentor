export const Box = ({ img, number, title, text }) => {
  return (
    <div className='flex sm:gap-5 gap-7'>
      <img src={img} alt={title} className='sm:h-[130px] h-[150px]' />
      <div className='flex flex-col justify-between '>
        <h2 className='text-[35px] font-bold text-Neutral-GrayishBlue leading-8'>
          {number}
        </h2>
        <h2 className='text-Neutral-VeryDarkBlue font-[900] text-xl hover:text-primary-SoftRed cursor-pointer'>
          {title}
        </h2>
        <p className='text-[15px]'>{text}</p>
      </div>
    </div>
  );
};
