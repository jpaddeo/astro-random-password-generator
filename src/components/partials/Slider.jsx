import { usePasswordGenerator } from '@/hooks/usePasswordGenerator.jsx';

const MIN_PASSWORD_LENGTH = 5;
const MAX_PASSWORD_LENGTH = 100;

export default function Slider() {
  const { passwordLength, updatePasswordLength } = usePasswordGenerator();

  const handleChangeLength = (e) => {
    updatePasswordLength(e.target.value);
  };

  return (
    <div className='flex items-center justify-center gap-2 text-white'>
      <span className='uppercase'>Length</span>
      <input
        id='slider'
        name='slider'
        type='range'
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        value={passwordLength}
        onInput={handleChangeLength}
      />
      <label htmlFor='slider'>{passwordLength}</label>
    </div>
  );
}
