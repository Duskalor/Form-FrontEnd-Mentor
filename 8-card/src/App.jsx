import desktop from './assets/images/image-product-desktop.jpg';
import cart from './assets/images/icon-cart.svg';
function App() {
  return (
    <main>
      <div className='max-w-screen-lg mx-auto  h-screen'>
        <div className='flex items-center h-full justify-center'>
          <div className='flex w-[600px] bg-white text-black rounded-xl'>
            <img
              src={desktop}
              alt='desktop'
              className=' w-[50%] rounded-s-xl'
            />
            <div className='p-7 flex flex-col justify-between'>
              <h3 className='text-md text-Darkgrayishblue uppercase tracking-[0.3rem] '>
                Perfume
              </h3>
              <h2 className='text-[35px] font-bold leading-8'>
                Gabrielle Essence Eau De Parfum
              </h2>
              <p className='text-Darkgrayishblue font-semibold'>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className='flex gap-6 items-center'>
                <span className='text-[34px] font-bold text-Darkcyan'>
                  $149.99
                </span>
                <span className='text-Darkgrayishblue line-through'>
                  $169.99
                </span>
              </div>
              <button className='w-full bg-Darkcyan flex justify-center gap-3 items-center py-3 rounded-md'>
                <img src={cart} alt='cart' />
                <span className='font-bold text-white'>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

//

//

//
//

// Add to Cart
