import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setQuery, search, setSearched }) => {
	const initialState = {
		title: '',
		artist: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(formState);
		setFormState(initialState);
		setSearched(true);
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
				placeholder='Song'
				value={formState.title}
				required
			/>
			<input
				onChange={handleChange}
				id='artist'
				type='text'
				placeholder='Artist'
				value={formState.artist}
			/>
			<button type='submit'>
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</form>
	);
};

export default SearchBar;
