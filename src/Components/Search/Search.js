import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';

const Search = () => {
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	const [results, setResults] = useState([]);

	async function searchApi() {
		const url = '/test-search.json';
		await fetch(url)
			.then((res) => res.json())
			.then((resjson) => setResults(resjson.results.trackmatches.track));
	}

	return (
		<>
			<SearchBar setQuery={setQuery} search={searchApi} />
			<ResultList results={results} />
		</>
	);
};

export default Search;
