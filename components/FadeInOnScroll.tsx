
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FadeInOnScrollProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement>,
    options: IntersectionObserverInit
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, delay = 0, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const style = {
        transitionDelay: `${delay}ms`,
    };

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
