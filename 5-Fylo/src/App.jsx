import { useState } from 'react';
import { Body } from './Components/Body';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {
  const [withMobile, setWithMobile] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => {
      setWithMobile(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  const selected = useMemo(() => {
    return withMobile >= 1000
      ? `url("./assets/images/bg-curvy-desktop.svg")`
      : `url("./assets/images/bg-curvy-mobile.svg")`;
  }, [withMobile]);
  console.log(withMobile, selected);

  return (
    <div
      className={` bg-main min-h-screen grid sm:grid-rows-[100px,1fr,500px] grid-rows-[100px,1fr,1000px]  text-white sm:bg-[${selected}] bg-center bg-cover  `}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
