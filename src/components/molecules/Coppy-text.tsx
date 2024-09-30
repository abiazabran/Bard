import { useCopyToClipboard } from 'react-use';
import { toast } from 'sonner';

export function CoppyText() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copyToClipboard] = useCopyToClipboard();

  function handleCopy() {
    copyToClipboard('2cgoeEbGdZqPYzUUHHyVP3G4hBZimdx87rvK3Cm6e9Dm');
    toast.success('Copied to clipboard!');
  }

  return (
    <div>
      <div className="bg-white px-4 pl-5 rounded-[40px] flex justify-around items-center mt-10 py-6">
        <p className="text-[40px] uppercase font-extrabold break-all whitespace-nowrap overflow-hidden pr-5 truncate">
          2cgoeEbGdZqPYzUUHHyVP3G4hBZimdx87rvK3Cm6e9Dm
        </p>
        <img onClick={handleCopy} className=" size-[70px] cursor-pointer" src="/assets/svg/coppy-icon.svg" alt="" />
      </div>
    </div>
  );
}
