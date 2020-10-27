import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';

function App() {
	const [similarSongs, setSimilarSongs] = useState([]);

	useEffect(() => {
		const url = '/test-data.json';
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setSimilarSongs(resJson.similartracks));
	});

	return (
		<div className='App'>
			<SearchBar />
		</div>
	);
}

export default App;
