import css from '../ImageCard/ImageCard.module.css';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const ImageCard = forwardRef(({ image, openModal }, ref) => {
	const smallImage = image.urls.small;
	const bigImage = image.urls.regular;
	const { alt_description } = image;
	const handleClick = () => {
		openModal(bigImage);
	};
	return (
		<div className={css.image} onClick={handleClick} ref={ref}>
			<img src={smallImage} alt={alt_description || 'Image have no disciription'} />
		</div>
	);
});

ImageCard.displayName = 'ImageCard';
ImageCard.propTypes = {
	image: PropTypes.any,
	openModal: PropTypes.func,
};
export default ImageCard;
