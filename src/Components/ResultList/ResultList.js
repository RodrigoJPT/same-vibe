import React, { useContext } from 'react';
import Result from '../Result/Result';
import { AppContext } from '../App/AppContext';

const ResultList = ({ results, query }) => {
	const { userSong } = useContext(AppContext);
	if (!results.length) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className='result-list-container'>
			<h3>
				Showing results for {query.title}{' '}
				{query.artist ? `by ${query.artist}` : null}
			</h3>
			<ul>
				{results.map((result, index) => (
					<Result result={result} key={index} />
				))}
			</ul>
		</div>
	);
};

export default ResultList;
