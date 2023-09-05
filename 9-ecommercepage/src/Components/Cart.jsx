import { useStore } from '../store/store';
import icondelete from '../assets/images/icon-delete.svg';
import { setPrice } from '../utils/setPrice';
import confetti from 'canvas-confetti';
export const Cart = ({ active }) => {
  const cart = useStore((store) => store.cart);
  const deleteProduct = useStore((store) => store.deleteProduct);
  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={`${
        active ? 'absolute' : 'hidden'
      }  lg:w-[400px] xl:bottom-[-250px] top-24 left-0 right-0 mx-2 xl:left-[-220px] md:left-[-270px] min-h-[260px]  pb-8 z-50 gap-3 bg-white shadow-2xl rounded-md flex flex-col `}
    >
      <h3 className=' border-b-2 p-5 font-bold text-lg'>Cart</h3>
      <div
        className={`p-5  ${
          cart.length > 0
            ? ''
            : 'h-full flex flex-1 items-center justify-center'
        }`}
      >
        {cart.length > 0 ? (
          cart.map(({ id, Thumbnail, title, price, count }) => {
            return (
              <li key={id} className='list-none flex justify-between'>
                <img
                  src={Thumbnail[0].image}
                  alt={title}
                  className='w-14 rounded'
                />
                <div className='text-lg'>
                  <h5 className='text-DarkGrayishBlue'>{title}</h5>
                  <div className=''>
                    <span className='text-DarkGrayishBlue'>
                      {setPrice(price)} x {count}
                    </span>
                    &nbsp;
                    <span className='font-bold'>{setPrice(price * count)}</span>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img
                    onClick={() => deleteProduct(id)}
                    src={icondelete}
                    alt='close'
                    className='w-4 cursor-pointer'
                  />
                </div>
              </li>
            );
          })
        ) : (
          <div
            className={`   text-center font-semibold text-lg text-DarkGrayishBlue`}
          >
            Your cart is empty.
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className='px-5 flex '>
          <button
            onClick={() => confetti()}
            className='flex flex-1  justify-center items-center gap-4 bg-Orange py-4 text-white font-bold rounded-xl'
          >
            <span>Checkout</span>
          </button>
        </div>
      )}
    </section>
  );
};
