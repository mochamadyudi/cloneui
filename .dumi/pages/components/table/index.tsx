/**
 * apiHeader: false
 */
import React from 'react';
import { DumiSiteProvider, Hero } from 'dumi-theme-antd-style';

export default () => (
	<DumiSiteProvider
		token={{
			sidebarWidth: 240,
			demoInheritSiteTheme: true,
		}}
	>
		<Hero
			title={'Ant Design <b>Style</b>'}
			actions={[
				{ text: '主按钮', link: '/components/hero' },
				{ text: '辅助按钮', link: '/' },
			]}
			description={'炫酷的 Hero 头部组件'}
		/>
	</DumiSiteProvider>
);
