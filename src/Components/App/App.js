import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from './AppContext';
import Search from '../Search/Search';

function App() {
	const [similarSongs, setSimilarSongs] = useState([]);
	const [userSong, setUserSong] = useState('');

	async function getSimilarSongs(songInfo) {
		console.log(songInfo);
		const url = '/test-data.json';
		setUserSong(songInfo);
		/* 		await fetch(url)
			.then((res) => res.json())
			.then((resJson) => setSimilarSongs(resJson.similartracks)); */
	}

	return (
		<>
			<header>
				<h1>SameVibe</h1>
			</header>
			<main>
				<AppContext.Provider
					value={{ similarSongs, setSimilarSongs, getSimilarSongs }}>
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
