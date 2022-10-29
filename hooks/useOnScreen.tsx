import React from 'react'

type Props = {
    ref: any,
}

const useOnScreen = ({ ref }: Props  ) => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect( ()=>{
        const observer = new IntersectionObserver( ([entry]) => setIntersecting(entry.isIntersecting) );

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [] )

  return isIntersecting;
}

export default useOnScreen