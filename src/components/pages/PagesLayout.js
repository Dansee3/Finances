import React, { useState, useEffect, useRef } from 'react';
import Pages from './Pages';

const Conector = () => {
  const absHeightRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (absHeightRef.current) {
        const newHeight = absHeightRef.current.offsetHeight;
        if (newHeight !== height) {
          setHeight(newHeight);
        }
      }
    };
    const currentElement = absHeightRef.current;
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (absHeightRef.current) {
      resizeObserver.observe(absHeightRef.current);
    }

    return () => {
      if (currentElement) {
        resizeObserver.unobserve(currentElement);
      }
      resizeObserver.disconnect();
    };
  }, [height]);

  return (
    <>
      <div
        style={{ height: `${height - 20}px` }}
        className="absolute top-32 min-h-[80%] w-[65%] bg-slate-600 border border-seaBlue rounded-md"
      ></div>
      <div
        ref={absHeightRef}
        className="relative min-h-[82vh] w-[90%] h-auto mt-14 p-10 rounded-md backdrop-blur-sm"
      >
        <Pages />
      </div>
    </>
  );
};

export default Conector;
