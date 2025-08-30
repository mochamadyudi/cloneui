import * as React from 'react';
import { Card } from 'cloneui';

const App = () => {
	return (
		<Card.Post>
			<Card.PostContent
				title="Lorem ipsum dolor sit amet"
				summary="Lorem ipsum dolor sit amet"
				ellipsis={{
					summary: true,
				}}
				maxLine={{
					summary: 2,
				}}
				addonAfter={{
					summary: '2021-01-01',
					title: '2021-01-01',
				}}
			>
				<p>testing</p>
			</Card.PostContent>
		</Card.Post>
	);
};

export default App;
