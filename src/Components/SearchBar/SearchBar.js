import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setQuery, search }) => {
	const initialState = {
		title: '',
		artist: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(formState);
		setFormState(initialState);
		search();
	};
	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value });
	};

	return (
		<form className='search-bar' onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				id='title'
				type='text'
				placeholder='Search by song title'
				value={formState.title}
				required
			/>
			<input
				onChange={handleChange}
				id='artist'
				type='text'
				placeholder='Artist (optional)'
				value={formState.artist}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
