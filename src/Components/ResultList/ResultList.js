import React, { useContext } from 'react';
import Result from '../Result/Result';
import { AppContext } from '../App/AppContext';
import './ResultList.css';

const ResultList = ({ results, query, badFetch }) => {
	const { userSong } = useContext(AppContext);

	if (badFetch) {
		return (
			<div className='result-list-container'>
				<p className='result-list-header'>
					No results for "{query.title}"
					{query.artist ? ` by ${query.artist}` : null}:
				</p>
			</div>
		);
	}
	if (!results.length) {
		return (
			<div className='result-list-container'>
				<p className='result-list-header'>Searching...</p>
			</div>
		);
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
