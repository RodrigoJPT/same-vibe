import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';

const Search = () => {
	console.log('rerendering');
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	const [results, setResults] = useState([]);

	const searchApi = () => {
		const url = '/test-search.json';
		fetch(url)
			.then((res) => res.json())
			.then((resjson) => setResults(resjson));
	};

	return (
		<>
			<SearchBar setQuery={setQuery} search={searchApi} />
			<ResultList results={results} />
		</>
	);
};

export default Search;
