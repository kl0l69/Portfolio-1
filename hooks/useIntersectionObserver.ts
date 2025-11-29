import { useEffect, useRef, useState } from 'react';

// الهوك ده بيراقب العنصر ولما يظهر في الشاشة بيغير الحالة لـ true
export const useIntersectionObserver = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // أول ما العنصر يظهر، بنوقف مراقبة عشان نضمن إنه يفضل ظاهر وميختفيش تاني
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { domRef, isVisible };
};