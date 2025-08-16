import * as React from 'react';

const Page = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={null}>
				<p>components</p>
			</React.Suspense>
		</React.Fragment>
	);
};

export default Page;
