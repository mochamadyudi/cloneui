import * as React from 'react';

export interface HeaderProps {}

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
	children,
}) => {
	return <header>{children}</header>;
};

export default Header;
