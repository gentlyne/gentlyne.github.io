import { useCallback, useState } from 'react';

export const useOverflow = (element: HTMLElement | null) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (!element) return;
    const hasOverflow = element.scrollHeight > element.clientHeight;
    setIsOverflowing(hasOverflow);
  }, [element]);

  return { isOverflowing, checkOverflow };
};
