import React, { FC, useRef, useEffect, useCallback } from 'react';
import cn from 'clsx';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { useOverflow } from '../../../hooks/useOverflow';
import s from './CroppedText.module.sass';

export type CroppedTextProps = {
  className?: string;
  children: string;
  opened: boolean;
  rows?: number;
};

export const CroppedText: FC<CroppedTextProps> = ({ className, children, opened, rows = 3 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isOverflowing, checkOverflow } = useOverflow(ref.current);

  const handleResize = useCallback(() => {
    checkOverflow();
  }, [checkOverflow]);

  useResizeObserver(ref.current, handleResize);

  useEffect(() => {
    checkOverflow();
  }, [children, rows, checkOverflow]);

  return (
    <div
      ref={ref}
      className={cn(s.root, className)}
      style={
        opened
          ? undefined
          : {
              display: '-webkit-box',
              WebkitLineClamp: rows,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }
      }
    >
      {children}
    </div>
  );
};
