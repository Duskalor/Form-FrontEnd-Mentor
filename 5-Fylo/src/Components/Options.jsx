export const Options = ({ img, title, text }) => {
  return (
    <div className='flex flex-col items-center justify-between text-center gap-6'>
      <img src={img} alt={title} className=' ' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-[15px]'>{text}</p>
      </div>
    </div>
  );
};
