export const Card = ({ text, name, role, img }) => {
  return (
    <div className='px-5 pt-10 pb-7 flex flex-col gap-3 bg-testimonials'>
      <p className='text-[14px]'>{text}</p>
      <div className='flex items-center gap-4'>
        <img src={img} alt={`${img}`} className='h-[30px] rounded-[50%]' />
        <div>
          <h3 className='text-[13px]'>{name}</h3>
          <h3 className='text-[9px] opacity-60'>{role}</h3>
        </div>
      </div>
    </div>
  );
};
