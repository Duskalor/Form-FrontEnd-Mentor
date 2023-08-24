import { Rated } from './Components/Rated';
import { Thanks } from './Components/Thanks';
import { useRated } from './context/useRated';

function App() {
  const { active } = useRated();
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <div className='w-[430px] h-[450px] bg-VeryDarkBlue rounded-3xl px-5 py-2'>
        {!active ? <Rated /> : <Thanks />}
      </div>
    </div>
  );
}

export default App;
