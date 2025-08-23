import React, { type FC, type PropsWithChildren } from 'react';
import { LayoutProps } from 'cloneui';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return <div className="test">{children}</div>;
};

export default Layout;
