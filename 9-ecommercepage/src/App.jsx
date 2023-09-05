import { Hero } from './Components/Hero';
import { MainHeader } from './Components/MainHeader';
import { useStore } from './store/store';

function App() {
  const desableActive = useStore((store) => store.desableActive);
  return (
    <main
      onClick={desableActive}
      className=' bg-LightGrayishBlue min-h-screen flex flex-col sm:gap-10 lg:gap-16  text-black sm:grid grid-rows-[120px,1fr] relative '
    >
      <MainHeader />
      <Hero />
    </main>
  );
}

export default App;
