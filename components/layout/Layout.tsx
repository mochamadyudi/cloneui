import * as React from 'react';
import { LayoutProps } from 'cloneui';

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
	children,
}) => {
	return <div className="test">{children}</div>;
};

export default Layout;
