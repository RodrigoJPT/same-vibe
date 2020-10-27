import React from 'react';
import Result from '../Result/Result';

const ResultList = ({ results }) => {
	console.log(results);
	if (!results.length) {
		return <h1>Enter search term above</h1>;
	}
	return (
		<>
			<ul>
				{results.map((result) => (
					<Result result={result} />
				))}
			</ul>
		</>
	);
};

export default ResultList;
