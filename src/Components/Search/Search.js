import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';

const Search = () => {
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	const [results, setResults] = useState([]);
	const [searched, setSearched] = useState(false);

	async function searchApi() {
		const url = '/test-search.json';
		await fetch(url)
			.then((res) => res.json())
			.then((resjson) => setResults(resjson.results.trackmatches.track));
	}

	return (
		<>
			<SearchBar
				setQuery={setQuery}
				search={searchApi}
				setSearched={setSearched}
			/>
			{!searched ? (
				<p className='welcome-message'>
					Welcome to SameVibe, an app that takes a song you love and gives you
					songs that sound similar based on listening data from last.fm. Search
					for the song you love below to get started.
				</p>
			) : (
				<ResultList results={results} />
			)}
		</>
	);
};

export default Search;
