import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import { AppContext } from '../App/AppContext';

const Result = ({ result }) => {
	const { getSimilarSongs } = useContext(AppContext);
	const handleClick = (e) => {
		getSimilarSongs(result);
	};
	return (
		<button className='result' onClick={handleClick}>
			<h2>{result.name}</h2>
			<h3>{result.artist}</h3>
		</button>
	);
};

export default Result;
