export const News = ({ title, text }) => {
  return (
    <div className='sm:py-8 py-4 flex flex-col gap-2'>
      <h5 className='text-white text-clampTitle sm:text-xl font-bold hover:text-primary-SoftOrange cursor-pointer'>
        {title}
      </h5>
      <p className='sm:text-[15px] text-clampText leading-6 text-Neutral-GrayishBlue'>
        {text}
      </p>
    </div>
  );
};
