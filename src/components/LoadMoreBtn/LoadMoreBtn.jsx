import css from '../LoadMoreBtn/LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onScroll, onLoadMore, currentPage }, ref) => {
	console.log('current page:', { currentPage });
	const handleClick = () => {
		onLoadMore();
		onScroll();
	};

	return (
		<button className={css.button} onClick={handleClick} ref={ref}>
			Load More
		</button>
	);
};

LoadMoreBtn.propTypes = {
	onLoadMore: PropTypes.func,
	onScroll: PropTypes.func,
	currentPage: PropTypes.number,
};
export default LoadMoreBtn;
