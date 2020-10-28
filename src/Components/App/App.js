import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from './AppContext';
import Search from '../Search/Search';
import SameVibe from '../SameVibe/SameVibe';

function App() {
	const [similarSongs, setSimilarSongs] = useState([]);
	const [userSong, setUserSong] = useState({});

	return (
		<div className='App'>
			<header>
				<h1>SameVibe</h1>
			</header>
			<main>
				<AppContext.Provider
					value={{
						similarSongs,
						setSimilarSongs,
						userSong,
						setUserSong,
					}}>
					<Route path='/' exact render={() => <Redirect to='/home' />} />
					<Route path='/home'>
						<Search />
					</Route>
					<Route
						path='/:artist/:song'
						exact
						render={(routerProps) => {
							return <SameVibe match={routerProps.match} />;
						}}
					/>
				</AppContext.Provider>
			</main>
		</div>
	);
}

export default App;
