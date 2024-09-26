import css from '../ImageGallery/ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal }) => {
	return (
		<ul className={css.image_gallery}>
			{' '}
			{images.map(image => (
				<li key={image.id}>
					<ImageCard image={image} src={image.links} alt={image.name} openModal={openModal} />
				</li>
			))}
		</ul>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.any,
	openModal: PropTypes.func,
};

export default ImageGallery;
