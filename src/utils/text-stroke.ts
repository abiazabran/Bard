import { CSSProperties } from 'react';

export function textStroke(strokeWidth: number, color: string): CSSProperties {
  const values = [];

  for (let i = 0; i < strokeWidth; i++) {
    values.push(`-${i}px ${i}px 0px ${color}`);
    values.push(`${i}px ${i}px 0px ${color}`);
    values.push(`${i}px -${i}px 0px ${color}`);
    values.push(`-${i}px -${i}px 0px ${color}`);
  }

  const result = {
    textShadow: `${values.join(', ')}`,
  };
  return result;
}
