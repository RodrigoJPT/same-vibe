import React, { useState, useEffect } from 'react';

function App() {
	const [similarSongs, setSimilarSongs] = useState([]);

	useEffect(() => {
		const url = '/test-data.json';
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setSimilarSongs(resJson.similartracks));
	});

	return <div className='App'>{similarSongs.track.length}</div>;
}

export default App;
