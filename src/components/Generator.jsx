import GeneratorOptions from '@/components/GeneratorOptions.jsx';
import PasswordCard from '@/components/partials/PasswordCard.jsx';
import Actions from '@/components/partials/Actions.jsx';

import {
  PasswordGeneratorContextProvider,
  usePasswordGenerator,
} from '@/hooks/usePasswordGenerator.jsx';

import { LockIcon } from '@/components/icons/index.jsx';
import CopiedPasswords from '@/components/CopiedPasswords';

function InnerGenerator() {
  const { generatedPassword, strength, copiedPasswords } =
    usePasswordGenerator();

  return (
    <section className='flex flex-col items-center justify-center gap-4 bg-gray-500 max-w-sm md:max-w-lg mx-auto p-6 mt-6 rounded-lg shadow-sm shadow-gray-200 font-mono bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900'>
      <div className='flex items-center justify-center gap-2 text-white text-2xl uppercase mt-2'>
        <LockIcon className='w-5 h-5 animate-pulse' />
        <h1>Random Password Generator</h1>
        <LockIcon className='w-5 h-5 animate-pulse' />
      </div>
      <div className='flex items-center justify-center gap-2'>
        <PasswordCard password={generatedPassword} />
        <Actions />
      </div>
      <span
        className={`text-sm font-bold ${
          strength === 'strong'
            ? 'text-green-600'
            : strength === 'medium'
            ? 'text-yellow-600'
            : 'text-red-600'
        }`}
      >
        {strength}
      </span>
      <GeneratorOptions />
      {copiedPasswords.length > 0 && <CopiedPasswords />}
      <footer className='text-sm text-white'>
        <span>
          Developed with 💙 by{' '}
          <a
            href='https://github.com/jpaddeo'
            className='border-b-2 border-dotted  border-white hover:border-gray-500'
          >
            jpaddeo
          </a>
        </span>
      </footer>
    </section>
  );
}

export default function Generator() {
  return (
    <PasswordGeneratorContextProvider>
      <InnerGenerator />
    </PasswordGeneratorContextProvider>
  );
}
