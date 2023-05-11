import { ClipboardIcon, RefreshIcon } from '@/components/icons/index.jsx';

import { usePasswordGenerator } from '@/hooks/usePasswordGenerator';

export default function CopiedPasswords() {
  const { copiedPasswords, clearCopiedPasswords } = usePasswordGenerator();
  return (
    <div className='w-full'>
      <span className='text-white flex items-center justify-center gap-2'>
        Last {copiedPasswords.length} copied passwords{' '}
        <button onClick={clearCopiedPasswords} title='Copy'>
          <RefreshIcon className='w-5 h-5' />
        </button>
      </span>
      <div className='flex flex-col gap-2 mt-2'>
        {copiedPasswords.map((password) => (
          <div
            key={password}
            className='flex items-center justify-center gap-2 w-full'
          >
            <span className='flex gap-2 items-center justify-center bg-gray-200 p-6 rounded-xl w-full break-all tracking-widest font-bold'>
              {password}
              <button
                onClick={() => navigator.clipboard.writeText(password)}
                title='Copy'
              >
                <ClipboardIcon className='w-5 h-5' />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
