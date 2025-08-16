import * as React from 'react';

export interface FooterProps{

}
const Footer: React.FC<React.PropsWithChildren<FooterProps>> = ({ children }) => {
	return (
		<footer>{children}</footer>
	)
};

export default Footer;