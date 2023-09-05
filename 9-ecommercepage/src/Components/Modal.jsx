import { useState } from 'react';
import { imagesThumbnail, imagesToSee } from '../utils/images';
import { useStore } from '../store/store';
import close from '../assets/images/icon-close.svg';
import next from '../assets/images/icon-next.svg';
import previous from '../assets/images/icon-previous.svg';

export const Modal = ({ id }) => {
  const [selected, setselected] = useState(id);
  const nextImage = () => {
    const cantidad = imagesToSee.length;
    if (selected < cantidad) {
      setselected(selected + 1);
    }
  };
  const previousImage = () => {
    if (selected !== 1) {
      setselected(selected - 1);
    }
  };

  const { image } = imagesToSee.find((img) => img.id === selected);
  const desablemodalActive = useStore((state) => state.desablemodalActive);
  return (
    <div className='z-40 absolute top-0 left-0 right-0 bottom-0 min-h-screen w-full flex  justify-center  bg-black/75'>
      <div className='flex flex-col  w-[30%] h-[62%] relative top-[12%]  '>
        <span
          onClick={previousImage}
          className='absolute w-14 h-14 left-[-30px] rounded-[50%] cursor-pointer bg-white top-[50%] flex items-center justify-center '
        >
          <img src={previous} alt='previous' className='w-3' />
        </span>
        <span
          onClick={nextImage}
          className='absolute w-14 h-14 right-[-30px]  rounded-[50%] cursor-pointer bg-white top-[50%] flex items-center justify-center '
        >
          <img src={next} alt='previous' className='w-3' />
        </span>

        <img
          onClick={desablemodalActive}
          src={close}
          alt='close'
          className='absolute right-0 top-[-50px] w-6 [fill:red] cursor-pointer'
        />
        <img src={image} alt={`image-${selected}`} className='rounded-3xl' />
        <nav className='flex  gap-[27px] pt-5 justify-center'>
          {imagesThumbnail.map(({ image, id }) => {
            return (
              <div
                onClick={() => setselected(id)}
                key={id}
                className={`rounded-[20px]  object-cover bg-white w-24   ${
                  selected === id
                    ? 'border-[3px] border-Orange'
                    : 'border-[3px]  border-black/75'
                }`}
              >
                <img
                  src={image}
                  className={`rounded-2xl cursor-pointer z-50  ${
                    selected === id ? 'opacity-40 ' : 'hover:opacity-70 '
                  } `}
                  alt={`image${id}`}
                />
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
