import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	return (
		<>
			<SearchBar setQuery={setQuery} />
		</>
	);
};

export default Search;
