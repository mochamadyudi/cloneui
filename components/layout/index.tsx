import Footer from './Footer';
import Header from './Header';
import InternalLayout from './Layout';
import Sider from './Sider';

type LayoutType = typeof InternalLayout;

type CompoundedComponent = LayoutType & {
	Header: typeof Header;
	Sider: typeof Sider;
	Footer: typeof Footer;
	Content: any;
};

const Layout = InternalLayout as CompoundedComponent;

Layout.Footer = Footer;
Layout.Sider = Sider;
Layout.Header = Header;
Layout.Content = '';

if (process.env.NODE_ENV !== 'production') {
	Layout.displayName = 'Layout';
}

export type { LayoutProps } from './interface';
export type { HeaderProps } from './Header';
export type { SiderProps } from './Sider';
export type { FooterProps } from './Footer';

export default Layout;
