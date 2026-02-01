import { useEffect } from 'react';

interface Props {
  target: React.RefObject<Element>;
  onIntersect: () => void;
  enabled?: boolean;
}

export const useIntersectionObserver = ({ target, onIntersect, enabled = true }: Props) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [target, onIntersect, enabled]);
};
