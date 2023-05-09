import { usePasswordGenerator } from '@/hooks/usePasswordGenerator.jsx';

export default function PasswordCard({ password }) {
  const { strength } = usePasswordGenerator();

  return (
    <div
      className={`bg-gray-200 p-6 rounded-xl w-full break-all tracking-widest font-bold border-4 ${
        strength === 'strong'
          ? 'border-green-600 border-dashed'
          : strength === 'medium'
          ? 'border-yellow-600 border-dashed'
          : 'border-red-600 border-dashed'
      }`}
      aria-label={password}
      role='heading'
    >
      {(password || 'Generating...').split('').map((char, index) => {
        if (char.match(/\d+/))
          return (
            <span key={index} className='text-blue-600' aria-hidden='true'>
              {char}
            </span>
          );
        if (char.match(/[!@#$%^&*\(\)]+/))
          return (
            <span key={index} className='text-green-600' aria-hidden='true'>
              {char}
            </span>
          );
        return (
          <span key={index} aria-hidden='true'>
            {char}
          </span>
        );
      })}
    </div>
  );
}
