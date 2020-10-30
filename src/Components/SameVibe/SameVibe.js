import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App/AppContext';
import Song from '../Song/Song';
import './SameVibe.css';

const SameVibe = ({ match }) => {
	const { userSong, setUserSong, similarSongs, setSimilarSongs } = useContext(
		AppContext
	);
	async function getSimilarSongs(songInfo) {
		const url = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${songInfo.artist}&track=${songInfo.name}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`;
		fetch(url)
			.then((res) => res.json())
			.then((resjson) => {
				setSimilarSongs(resjson.similartracks.track);
			});
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
			console.log(userSong);
			getSimilarSongs(userSong);
		}
	}, []);

	if (!similarSongs.length) {
		return <h3>Loading...</h3>;
	}

	console.log(similarSongs);
	return (
		<div className='song-list'>
			<p>
				Showing songs with the SameVibe as <b>{userSong.name}</b> by{' '}
				<b>{userSong.artist}</b>
				<Link to='/home' className='return-link'>
					{'Search Again?'}
				</Link>
			</p>
			<ul>
				{similarSongs.map((song, index) => (
					<Song key={index} song={song} />
				))}
			</ul>
		</div>
	);
};

export default SameVibe;
