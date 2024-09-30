import { cn } from '../utils/cn';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: Props) {
  return <div className={cn('mx-auto max-w-[1300px] px-4 lg:px-6', className)}>{children}</div>;
}
