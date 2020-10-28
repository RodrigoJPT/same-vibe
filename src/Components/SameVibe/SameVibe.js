import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App/AppContext';

const SameVibe = ({ match }) => {
	const { userSong, setUserSong, similarSongs, setSimilarSongs } = useContext(
		AppContext
	);
	async function getSimilarSongs(songInfo) {
		const url = '/test-data.json';
		fetch(url)
			.then((res) => res.json())
			.then((resjson) => setSimilarSongs(resjson.similartracks.track));
	}

	useEffect(() => {
		if (!userSong.name && match.params.artist && match.params.song) {
			const songInfo = {
				name: match.params.song,
				artist: match.params.artist,
			};
			setUserSong(songInfo);
			getSimilarSongs(songInfo);
		} else {
			getSimilarSongs(userSong);
		}
	}, []);

	if (!similarSongs.length) {
		return <h3>Loading...</h3>;
	}

	console.log(similarSongs);
	return (
		<div className='song-list'>
			<Link to='/home'>{'< Return'}</Link>
			<ul>
				{similarSongs.map((song, index) => (
					<li key={index}>
						{song.name},{song.artist.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SameVibe;
