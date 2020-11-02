import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App/AppContext';
import Song from '../Song/Song';
import './SameVibe.css';

const SameVibe = ({ match }) => {
	const { userSong, setUserSong, similarSongs, setSimilarSongs } = useContext(
		AppContext
	);
	const [badFetch, setBadFetch] = useState(false);

	async function getSimilarSongs(songInfo) {
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${songInfo.artist}&track=${songInfo.name}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`;
		fetch(url)
			.then((res) => res.json())
			.then((resjson) => {
				if (!resjson.similartracks.track.length) {
					setBadFetch(true);
				} else {
					setBadFetch(false);
					setSimilarSongs(resjson.similartracks.track);
				}
			})
			.catch((err) => setBadFetch(true));
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

	if (badFetch) {
		return (
			<div className='song-list'>
				<p>
					Apologies, we could not find the songs.
					<Link to='/home' className='return-link'>
						{'Search Again?'}
					</Link>
				</p>
			</div>
		);
	}

	if (!similarSongs.length) {
		return (
			<div className='song-list'>
				<p>Loading...</p>
			</div>
		);
	}

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
