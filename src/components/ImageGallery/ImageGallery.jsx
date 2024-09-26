import css from '../ImageGallery/ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal, lastImageRef }) => {
	return (
		<ul className={css.image_gallery}>
			{' '}
			{images.map((image, index) => (
				<li key={image.id}>
					<ImageCard
						image={image}
						src={image.links}
						alt={image.name}
						openModal={openModal}
						ref={index === images.length - 1 ? lastImageRef : null}
					/>
				</li>
			))}
		</ul>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.any,
	openModal: PropTypes.func,
	lastImageRef: PropTypes.any,
};

export default ImageGallery;
