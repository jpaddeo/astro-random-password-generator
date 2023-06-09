import {
  CHAR_OPTIONS,
  usePasswordGenerator,
} from '@/hooks/usePasswordGenerator.jsx';

export default function CharOptions() {
  const { options, updateOptions } = usePasswordGenerator();

  const handleOptionChange = (e) => {
    updateOptions(e.target.value);
  };

  return (
    <div className='flex items-center gap-2'>
      {Object.keys(CHAR_OPTIONS).map((char) => (
        <div key={char} className='flex items-center justify-center'>
          <input
            id={char}
            type='checkbox'
            value={char}
            onChange={handleOptionChange}
            checked={options.includes(char)}
            disabled={char === 'LETTERS'}
            className='w-4 h-4 text-blue-600 rounded-lg focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
          />
          <label
            htmlFor={char}
            className='ml-2 text-sm font-medium text-gray-200'
          >
            {char}
          </label>
        </div>
      ))}
    </div>
  );
}
