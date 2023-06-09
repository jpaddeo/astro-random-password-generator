import Slider from '@/components/partials/Slider.jsx';
import CharOptions from '@/components/partials/CharOptions.jsx';

export default function GeneratorOptions() {
  return (
    <div className='flex items-center justify-center bg-gray-600 p-4 rounded-lg gap-4 w-full flex-col'>
      <Slider />
      <CharOptions />
    </div>
  );
}
