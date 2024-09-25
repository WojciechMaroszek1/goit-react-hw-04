import css from '../ImageModal/ImageModal.module.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ImageModal = ({ modalIsOpen, afterOpenModal, closeModal, selectedImage }) => {
	return (
		<div>
			<Modal
				className={css.modal}
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Photo Modal"
			>
				<button onClick={closeModal}>Close</button>
				<img src={selectedImage} alt="Selected" />
			</Modal>
		</div>
	);
};

ImageModal.propTypes = {
	modalIsOpen: PropTypes.any,
	afterOpenModal: PropTypes.func,
	closeModal: PropTypes.func,
	selectedImage: PropTypes.string,
};
export default ImageModal;
