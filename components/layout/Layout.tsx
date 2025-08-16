import React, { type FC, type PropsWithChildren } from 'react';
import { LayoutProps } from 'kui';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return <div className="test">{children}</div>;
};

export default Layout;
