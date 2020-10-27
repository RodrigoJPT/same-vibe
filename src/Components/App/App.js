import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { Route, Link, Redirect } from 'react-router-dom';
import { AppContext } from './AppContext';
import Search from '../Search/Search';

function App() {
	const [similarSongs, setSimilarSongs] = useState([]);

	useEffect(() => {
		const url = '/test-data.json';
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setSimilarSongs(resJson.similartracks));
	});

	return (
		<>
			<header>
				<h1>SameVibe</h1>
			</header>
			<main>
				<AppContext.Provider value={{ similarSongs, setSimilarSongs }}>
					<Route path='/' exact render={() => <Redirect to='/home' />} />
					<Route path='/home'>
						<Search />
					</Route>
				</AppContext.Provider>
			</main>
		</>
	);
}

export default App;
