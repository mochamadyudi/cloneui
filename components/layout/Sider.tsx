import * as React from 'react';

export interface SiderProps{

}
const Sider: React.FC<React.PropsWithChildren<SiderProps>> = ({ children }) => {
	return (
		<aside>{children}</aside>
	)
};

export default Sider;