import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';
import { AppContext } from '../App/AppContext';

const Result = ({ result }) => {
	const { setUserSong } = useContext(AppContext);
	const history = useHistory();
	const handleClick = (e) => {
		setUserSong(result);
		const formattedSongTitle = result.name.split(' ').join('+');
		const formattedArtistName = result.artist.split(' ').join('+');
		history.push(`/${formattedArtistName}/${formattedSongTitle}`);
	};
	return (
		<button className='result' onClick={handleClick}>
			<img src='/vinyl-placeholder.png' alt='' />
			<div className='song-info-text'>
				<h2>{result.name}</h2>
				by
				<h3>{result.artist}</h3>
			</div>
		</button>
	);
};

export default Result;
