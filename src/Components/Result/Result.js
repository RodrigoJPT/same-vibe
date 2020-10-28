import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';
import { AppContext } from '../App/AppContext';

const Result = ({ result }) => {
	const { setUserSong } = useContext(AppContext);
	const history = useHistory();
	const handleClick = (e) => {
		setUserSong(result);
		history.push(`/song/${result.name}`);
	};
	return (
		<button className='result' onClick={handleClick}>
			<h2>{result.name}</h2>
			<h3>{result.artist}</h3>
		</button>
	);
};

export default Result;
