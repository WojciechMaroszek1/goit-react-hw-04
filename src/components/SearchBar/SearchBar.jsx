import { useState } from 'react';
import css from '../SearchBar/SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = e => {
		setQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!query.trim()) {
			toast.error('Please type a keyword!');
			return;
		}
		onSubmit(query);
	};

	return (
		<header className={css.header}>
			<form className={css.form_header} onSubmit={handleSubmit}>
				<input
					className={css.form_input}
					type="text"
					id="search"
					autoComplete="off"
					value={query}
					onChange={handleInputChange}
					autoFocus
					placeholder="Search images and photos"
				/>
				<button className={css.btn} type="submit">
					Search
				</button>
			</form>
			<Toaster />
		</header>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
