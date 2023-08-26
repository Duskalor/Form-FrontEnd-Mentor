export const Contact = ({ icon, text }) => {
  return (
    <div className='flex gap-5 '>
      <img
        src={icon}
        alt={`${icon}`}
        className='w-[19px] h-[18px] cursor-pointer'
      />
      {text && <p>{text}</p>}
    </div>
  );
};
