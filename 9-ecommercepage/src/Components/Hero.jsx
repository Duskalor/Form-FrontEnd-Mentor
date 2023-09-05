import cart2 from '../assets/images/icon-cart2.svg';
import minus from '../assets/images/icon-minus.svg';
import plus from '../assets/images/icon-plus.svg';
import { imagesThumbnail, imagesToSee } from '../utils/images';
import { useStore } from '../store/store';
import { Modal } from './Modal';
import { sizeSelected, useWidth } from '../hooks/useWidth';
import next from '../assets/images/icon-next.svg';
import previous from '../assets/images/icon-previous.svg';

export const Hero = () => {
  const {
    count,
    increment,
    decrement,
    selected,
    setSelected,
    addToCart,
    setmodalActive,
    modalActive,
  } = useStore((store) => store);

  const nextImage = () => {
    const cantidad = imagesToSee.length;
    if (selected < cantidad) {
      setSelected(selected + 1);
    }
  };
  const previousImage = () => {
    if (selected !== 1) {
      setSelected(selected - 1);
    }
  };
  const { width } = useWidth();

  const { image } = imagesToSee.find((img) => img.id === selected);
  return (
    <section className='max-w-screen-xl mx-auto w-full flex lg:flex-row flex-col justify-between lg:px-12 sm:gap-10 pb-10'>
      {width > sizeSelected && modalActive && <Modal id={selected} />}
      <aside className='flex flex-col gap-8 lg:w-[42%] relative'>
        {width < sizeSelected && (
          <span
            onClick={previousImage}
            className='absolute lg:w-14 w-10 h-10 lg:h-14 left-5 lg:left-[-30px] top-[40%] rounded-[50%] cursor-pointer bg-white  flex items-center justify-center '
          >
            <img src={previous} alt='previous' className='w-[10px]' />
          </span>
        )}

        {width < sizeSelected && (
          <span
            onClick={nextImage}
            className='absolute lg:w-14 w-10 h-10 lg:h-14 lg:right-[-30px] right-5  rounded-[50%] cursor-pointer bg-white top-[40%] flex items-center justify-center '
          >
            <img src={next} alt='previous' className='w-[10px]' />
          </span>
        )}
        <img
          src={image}
          alt={`image-${selected}`}
          onClick={() => width > sizeSelected && setmodalActive()}
          className='lg:rounded-3xl cursor-pointer sm:h-auto h-80 object-cover'
        />
        <nav className='flex  gap-[27px]'>
          {width > sizeSelected &&
            imagesThumbnail.map(({ image, id }) => {
              return (
                <div
                  onClick={() => setSelected(id)}
                  key={id}
                  className={`rounded-3xl  ${
                    selected === id
                      ? 'border-[3px] border-Orange'
                      : 'border-[3px] border-LightGrayishBlue'
                  }`}
                >
                  <img
                    src={image}
                    className={`rounded-2xl cursor-pointer ${
                      selected === id ? 'opacity-40' : 'hover:opacity-70'
                    } `}
                    alt={`image${id}`}
                  />
                </div>
              );
            })}
        </nav>
      </aside>
      <aside className='lg:w-[50%] sm:p-12 px-5 flex flex-col xl:gap-9 gap-3 '>
        <h3 className='text-Orange font-bold uppercase sm:text-base text-sm'>
          Sneaker Company
        </h3>
        <h2 className='sm:text-5xl text-3xl  font-[900]'>
          Fall Limited Edition Sneakers
        </h2>
        <p className='sm:text-lg  sm:pt-5 text-DarkGrayishBlue'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <section className='flex sm:flex-col gap-3 sm:pt-0 py-5 sm:justify-normal justify-between items-center sm:items-start'>
          <div className='flex gap-4 items-center '>
            <span className='text-3xl font-bold'>$125.00</span>
            <span className='flex items-center justify-center w-12 rounded-md h-8 text-center text-lg font-bold bg-Paleorange text-Orange'>
              50%
            </span>
          </div>
          <span className='text-lg font-bold text-DarkGrayishBlue line-through	'>
            $250.00
          </span>
        </section>
        <section className='flex sm:flex-row flex-col gap-4 '>
          <div className='flex gap-2 justify-between sm:justify-normal text-center items-center [&>*]:px-5 [&>*]:font-bold bg-black/5 rounded-xl sm:py-0 py-2'>
            <img
              className='py-4 cursor-pointer '
              src={minus}
              alt='minus'
              onClick={decrement}
            />
            <span className='font-bold w-14 sm:text-base text-lg'>{count}</span>
            <img
              className='py-4 cursor-pointer'
              src={plus}
              alt='plus'
              onClick={increment}
            />
          </div>
          <button
            onClick={() => count > 0 && addToCart(1, count)}
            className='flex flex-1 justify-center items-center gap-4 bg-Orange py-4 text-white font-bold rounded-xl hover:opacity-80'
          >
            <img src={cart2} alt='cart2' className='text-white/5' />
            <span>Add to cart</span>
          </button>
        </section>
      </aside>
    </section>
  );
};
