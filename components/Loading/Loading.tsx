import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


// Loading between pages
export function Loading() {
    const router = useRouter();
    const [ loading, setLoading ] = useState<boolean>(false);
    useEffect(() => {
      const handleStart = (url: string) => (url !== router.pathname) && setLoading(true);
      const handleComplete = (url: string) => (url !== router.pathname) && setTimeout( ()  => (setLoading(false), 5000) );
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      }
    }, []);
    
    return loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
            <div className='flex justify-center items-center h-full'>
                <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
            </div>
        </div>
    )

}