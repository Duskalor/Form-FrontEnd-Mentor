import { useRated } from '../context/useRated';

const numeros = [1, 2, 3, 4, 5];
export const Buttons = () => {
  const { selected, handleActions } = useRated();
  return (
    <div className='flex gap-1 justify-between '>
      {numeros.map((i) => {
        return (
          <button
            key={i}
            onClick={() =>
              handleActions((prev) => ({
                ...prev,
                selected: !selected ? i : selected === i ? null : i,
              }))
            }
            className={` ${
              selected === i
                ? 'bg-LightGrey text-white'
                : 'bg-DarkBlue text-LightGrey'
            } hover:bg-Orange hover:text-white   w-[60px] h-[60px] flex justify-center items-center rounded-[50%]`}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
};
