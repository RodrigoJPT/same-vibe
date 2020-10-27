import React from 'react';
import Result from '../Result/Result';

const ResultList = ({ results }) => {
	if (!results.length) {
		return <h1>Enter search term above</h1>;
	}
	return (
		<>
			<ul>
				{results.map((result, index) => (
					<Result result={result} key={index} />
				))}
			</ul>
		</>
	);
};

export default ResultList;
