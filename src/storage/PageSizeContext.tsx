import React, { useEffect, useState, createContext } from 'react';

type Context = {
  width: number,
  isMobileSize: boolean,
  isTabletSize: boolean,
  isLaptopSize: boolean,
  isDesktopSize: boolean,
};

const breakpoints = {
  mobile: 320,
  tablet: 640,
  laptop: 1024,
  desktop: 1440,
};

export const PageSizeContext = createContext<Context>({
  width: 0,
  isMobileSize: false,
  isTabletSize: false,
  isLaptopSize: false,
  isDesktopSize: false,
});

type Props = {
  children: React.ReactNode;
};

export const PageSizeProvider: React.FC<Props> = ({ children }) => {
  const {
    tablet, laptop, desktop,
  } = breakpoints;

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileSize, setIsMobileSize] = useState(width < tablet);
  const [isTabletSize, setIsTabletSize] = useState(
    width >= tablet && width < laptop,
  );
  const [isLaptopSize, setIsLaptopSize] = useState(
    width >= laptop && width < desktop,
  );
  const [isDesktopSize, setIsDesktopSize] = useState(width >= desktop);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      setWidth(newWidth);
      setIsDesktopSize(newWidth >= desktop);
      setIsLaptopSize(newWidth >= laptop && newWidth < desktop);
      setIsTabletSize(
        newWidth >= tablet && newWidth < laptop,
      );
      setIsMobileSize(newWidth < laptop);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const value = {
    width,
    isMobileSize,
    isTabletSize,
    isLaptopSize,
    isDesktopSize,
  };

  return (
    <PageSizeContext.Provider value={value}>
      {children}
    </PageSizeContext.Provider>
  );
};
