import { Card1 } from './Components/Card1';
import { Card2 } from './Components/Card2';
import { useForm } from './hook/useForm';

function App() {
  const { valid } = useForm();
  return (
    <div className='grid min-h-screen grid-rows-[1fr,30px] '>
      <section className='max-w-screen-[1440px] w-full m-auto flex items-center h-full justify-center bg-DarkSlateGrey'>
        {valid ? <Card1 /> : <Card2 />}
      </section>
      <section className='flex justify-center items-center '>
        Challenge by&nbsp;
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
          style={{ color: 'hsl(228, 45%, 44%)' }}
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#'>&nbsp;Paul Cruz</a>.
      </section>
    </div>
  );
}

export default App;
