import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
				placeholder='Song name'
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
			<button type='submit'>
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</form>
	);
};

export default SearchBar;
