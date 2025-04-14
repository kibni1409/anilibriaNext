import { useEffect, useCallback, RefObject } from 'react';

export const useInfiniteScroll = (
    ref: RefObject<HTMLElement>,
    callback: () => void,
    options = {
        threshold: 100,
    }
) => {
    const handleScroll = useCallback(() => {
        if (!ref.current) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrollBottom = scrollHeight - scrollTop - clientHeight;

        if (scrollBottom < options.threshold) {
            callback();
        }
    }, [callback, options.threshold, ref]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
}; 