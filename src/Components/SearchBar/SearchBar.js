import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
	const [query, setQuery] = useState({
		title: '',
		artist: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	const handleChange = (e) => {
		setQuery({ ...query, [e.target.id]: e.target.value });
	};

	return (
		<form className='search-bar' onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				id='title'
				type='text'
				placeholder='Search by song title'
				value={query.title}
				required
			/>
			<input
				onChange={handleChange}
				id='artist'
				type='text'
				placeholder='Artist (optional)'
				value={query.artist}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
