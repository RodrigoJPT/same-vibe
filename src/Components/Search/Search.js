import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';
import './Search.css';

const Search = () => {
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	const [results, setResults] = useState([]);
	const [searched, setSearched] = useState(false);

	async function searchApi(query) {
		const formattedTitle = query.title.split(' ').join('+');
		const formattedArtist = query.artist.split(' ').join('+');
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.search${
			formattedArtist.length ? `&artist=${formattedArtist}` : ''
		}&track=${formattedTitle}&api_key=${
			process.env.REACT_APP_LASTFM_KEY
		}&format=json`;
		fetch(url)
			.then((res) => res.json())
			.then((resjson) => {
				setResults(resjson.results.trackmatches.track);
			});
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
					for the song you love using the search bars above to get started.
				</p>
			) : (
				<ResultList results={results} query={query} />
			)}
		</>
	);
};

export default Search;
