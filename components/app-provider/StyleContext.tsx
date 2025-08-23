import React, { createContext, useContext, useRef } from 'react';

interface StyleContextProps {
  cache: Set<string>;
  container: HTMLElement | null;
}

const StyleContext = createContext<StyleContextProps>({
  cache: new Set(),
  container: null,
});

export const useStyleContext = () => useContext(StyleContext);

export const StyleContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ========================== Ref ==========================
  const cacheRef = useRef<Set<string>>(new Set());

  return (
    <StyleContext.Provider
      value={{
        cache: cacheRef.current,
        container: typeof document !== 'undefined' ? document.head : null,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};
