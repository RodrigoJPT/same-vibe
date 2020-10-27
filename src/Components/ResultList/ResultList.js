import React from 'react';

const ResultList = (results) => {
	console.log('rerendering');
	if (!results.length) {
		return <h1>Enter search term above</h1>;
	}
	return (
		<>
			<ul>
				<li>result</li>
			</ul>
		</>
	);
};

export default ResultList;
