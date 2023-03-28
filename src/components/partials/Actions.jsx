import {
  ClipboardIcon,
  CheckCircleIcon,
  RefreshIcon,
} from '@/components/icons/index.jsx';

import { usePasswordGenerator } from '@/hooks/usePasswordGenerator.jsx';

export default function Actions() {
  const { generatePassword, copied, copyPassword } = usePasswordGenerator();

  const handleRefresh = (e) => {
    generatePassword();
  };

  return (
    <div className='flex flex-col items-center justify-between text-white gap-2'>
      <button onClick={handleRefresh} title='Refresh'>
        <RefreshIcon className='w-5 h-5 hover:animate-spin' />
      </button>
      <button onClick={copyPassword} disabled={copied} title='Copy'>
        {copied ? (
          <CheckCircleIcon className='w-5 h-5 text-green-500' />
        ) : (
          <ClipboardIcon className='w-5 h-5' />
        )}
      </button>
    </div>
  );
}
