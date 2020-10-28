import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';

const SameVibe = (props) => {
	const { userSong, setUserSong, similarSongs, setSimilarSongs } = useContext(
		AppContext
	);
	console.log(props);
	async function getSimilarSongs(songInfo) {
		console.log(songInfo);
		/* const url = '/test-data.json';
			await fetch(url)
			.then((res) => res.json())
			.then((resJson) => setSimilarSongs(resJson.similartracks)); */
	}

	if (!userSong.name) {
		return <h1>No User Selected Song</h1>;
	}

	return <h1>{userSong.name}</h1>;
};

export default SameVibe;
