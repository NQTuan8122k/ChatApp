import {useEffect, useRef} from 'react';

const useIsMounted = initVal => {
  const isMounted = useRef(initVal);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
export default useIsMounted;
