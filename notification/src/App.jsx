import { Notifications } from './Components/Notifications';
import mark from './assets/images/avatar-mark-webber.webp';
import angela from './assets/images/avatar-angela-gray.webp';
import jacob from './assets/images/avatar-jacob-thompson.webp';
import rizky from './assets/images/avatar-rizky-hasanuddin.webp';
import kimberly from './assets/images/avatar-kimberly-smith.webp';
import chest from './assets/images/image-chess.webp';
import nathan from './assets/images/avatar-nathan-peterson.webp';
import anna from './assets/images/avatar-anna-kim.webp';

function App() {
  return (
    <div className='bg-LightGrayishblue1 min-h-screen'>
      <div className='max-w-screen-lg m-auto sm:h-screen text-VeryDarkBlue flex items-center justify-center'>
        <div className='sm:h-[785px] w-[650px] bg-white rounded-xl p-7 grid grid-rows-[1fr] '>
          <div className='flex justify-between items-center mb-5'>
            <div className='flex items-center gap-3'>
              <h3 className='sm:text-2xl text-lg font-bold'>Notifications</h3>
              <span className='bg-Blue text-white text-[14px] font-semibold w-8 h-6 rounded-md text-center items-center flex justify-center'>
                3
              </span>
            </div>
            <p className='text-DarkGrayishBlue text-sm cursor-pointer hover:text-Blue sm:font-semibold'>
              Mark all as read
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Notifications
              img={mark}
              name={'Mark Webber'}
              reacted={'reacted to your recent post'}
              type1='My first tournament today!'
              time={'1m ago'}
              notify={true}
            />
            <Notifications
              img={angela}
              name={'Angela Gray'}
              reacted={'followed you'}
              notify={true}
              time={'5m ago'}
            />
            <Notifications
              img={jacob}
              name={'Jacob Thompson'}
              reacted={'has joined your group'}
              type2='Chess Club'
              notify={true}
              time={'1 day ago'}
            />
            <Notifications
              img={rizky}
              name={'Rizky hasanuddin'}
              reacted={'sent you a private message'}
              time={'5 day ago'}
              message={
                "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
              }
            />
            <Notifications
              img={kimberly}
              name={'Kimberly Smith'}
              reacted={'commented on your picture'}
              time={'1 week ago'}
              picture={chest}
            />

            <Notifications
              img={nathan}
              name={'Nathan Peterson'}
              reacted={'reacted to your recent post'}
              type1={'5 end-game strategies to increase your win rate'}
              time={'2 week ago'}
            />
            <Notifications
              img={anna}
              name={'Anna Kim'}
              reacted={'left the group'}
              type2={'Chess Club'}
              time={'2 week ago'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
