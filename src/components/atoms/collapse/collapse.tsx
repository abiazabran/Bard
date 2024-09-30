import React from 'react';

import { useCollapse } from './use-collapse';
import { cn } from '../../../utils/cn';

export interface CollapseHeader {
  open?: boolean;
  toggle: () => void;
}

export interface CollapseProps {
  as?: 'div' | 'ul';
  header: ({ open, toggle }: CollapseHeader) => React.ReactNode;
  duration?: number;
  defaultOpen?: boolean;
  panelClassName?: string;
  className?: string;
}

export function Collapse({
  as = 'div',
  header,
  duration,
  defaultOpen = false,
  panelClassName,
  className,
  children,
}: React.PropsWithChildren<CollapseProps>) {
  const { open, openTargetEl, targetEl, toggle } = useCollapse(duration, defaultOpen);
  const Component = as;
  const Children = as !== 'div' ? 'li' : 'div';
  return (
    <Component role="collapse" aria-expanded={open} data-testid="collapse-parent" className={cn(`collapse-root`, className)}>
      {header({ open, toggle })}
      <Children
        ref={targetEl}
        className={cn(`collapse-panel`, panelClassName)}
        style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      >
        {children}
      </Children>
    </Component>
  );
}

Collapse.displayName = 'Collapse';
