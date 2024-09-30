import { cn } from '../../utils/cn';

export function WhitePaperButton({ className }: { className?: string }) {
  return (
    <div className={cn('hidden md:inline-block', className)}>
      <a
        href="https://justices-bird.gitbook.io/justicebirdwhitepaper"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-yellow inline-block duration-200 text-black rounded-[10px] px-3 py-1.5 xl:px-4 xl:py-3 font-bold text-lg lg:text-2xl uppercase"
      >
        Whitepapper
      </a>
    </div>
  );
}
