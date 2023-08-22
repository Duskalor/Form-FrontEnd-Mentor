export const Notifications = ({
  img,
  name,
  reacted,
  type1,
  type2,
  time,
  notify,
  message,
  picture,
}) => {
  return (
    <li
      className={`${
        notify ? 'bg-VeryLightGrayishblue' : ''
      }  sm:text-[15px] text-[13px] px-2 pt-4 pb-3 rounded-lg flex justify-between sm:gap-0 gap-7`}
    >
      <div className='flex gap-4'>
        <img src={img} alt='mark' className='w-[40px] h-[40px]' />
        <div>
          <div className='flex items-center'>
            <p>
              <strong className='hover:text-Blue cursor-pointer'>{name}</strong>
              &nbsp;
              {<span className='text-DarkGrayishBlue'>{reacted}</span>}&nbsp;
              {type1 && (
                <strong className='text-DarkGrayishBlue hover:text-Blue cursor-pointer '>
                  {type1}
                </strong>
              )}
              {type2 && (
                <span className='text-Blue font-bold cursor-pointer'>
                  {type2}
                </span>
              )}
              {notify && (
                <span className='bg-Red w-[7px] h-[7px] rounded-[50%] inline-block ml-1'></span>
              )}
            </p>
          </div>
          <p className='text-GrayishBlue'>{time}</p>
          {message && (
            <div className='p-4 border-LightGrayishblue1 border-[1px] rounded-lg my-2 hover:bg-LightGrayishblue1 cursor-pointer'>
              <p className='text-DarkGrayishBlue font-medium'>{message}</p>
            </div>
          )}
        </div>
      </div>
      {picture && (
        <img src={picture} alt='picture' className='w-10 h-10 rounded-sm' />
      )}
    </li>
  );
};
