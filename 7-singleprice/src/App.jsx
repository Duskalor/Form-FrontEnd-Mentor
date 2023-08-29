function App() {
  return (
    <main className='bg-LightGray text-black h-screen m-auto flex justify-center'>
      <div className='flex justify-center  h-full flex-col  w-[700px] '>
        <div className='bg-neutral-50 rounded-2xl shadow-2xl'>
          <div className='p-10 flex flex-col gap-7 '>
            <h2 className='text-3xl font-bold text-Cyan'>Join our community</h2>
            <div className='flex flex-col gap-3'>
              <p className='text-BrightYellow text-lg font-bold'>
                30-day, hassle-free money back guarantee
              </p>
              <p className='text-GrayishBlue text-lg'>
                Gain access to our full library of tutorials along with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
              </p>
            </div>
          </div>
          <div className='flex text-white'>
            <section className='bg-Cyan w-[50%] p-10 flex flex-col gap-6  rounded-es-2xl'>
              <h2 className='text-xl'>Monthly Subscription</h2>
              <div className='flex flex-col gap-1'>
                <h3 className='text-LightGray flex gap-2 items-center '>
                  <span className='text-3xl font-bold text-white'>$29</span> per
                  month
                </h3>
                <p>Full access for less than $1 a day</p>
              </div>
              <button className='bg-BrightYellow py-3 rounded-md  text-white font-bold '>
                Sign Up
              </button>
            </section>

            <section className='bg-teal-400 w-[50%] p-10 rounded-ee-2xl '>
              <div className='flex flex-col gap-5 w-[80%]'>
                <h2 className='text-xl font-semibold'>Why Us</h2>
                <p className='text-LightGray'>
                  Tutorials by industry experts Peer &amp; expert code review
                  Coding exercises Access to our GitHub repos Community forum
                  Flashcard decks New videos every week
                </p>
              </div>
            </section>
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

//

//

//
