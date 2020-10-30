import React, { useContext } from 'react';
import Result from '../Result/Result';
import { AppContext } from '../App/AppContext';
import './ResultList.css';

const ResultList = ({ results, query }) => {
	const { userSong } = useContext(AppContext);
	if (!results.length) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className='result-list-container'>
			<p className='result-list-header'>
				Showing results for "{query.title}
				{query.artist ? ` by ${query.artist}` : null}":
			</p>
			<ul>
				{results.map((result, index) => (
					<Result result={result} key={index} />
				))}
			</ul>
		</div>
	);
};

export default ResultList;
