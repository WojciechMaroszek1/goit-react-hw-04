import '../components/App.module.css';
import SearchBar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal.jsx';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import Modal from 'react-modal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import css from './App.module.css';

import { useEffect, useState } from 'react';
import { useGetImages } from '../hooks/useGetImages.js';

Modal.setAppElement('#root');

function App() {
	const { isLoading, error, imagesList, getImages } = useGetImages();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [keyLetter, setKeyLetter] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (keyLetter) {
			getImages(keyLetter, page);
		} else {
			getImages('', page);
		}
	});

	const handleLoadmore = () => {
		setPage(prevpage => prevpage + 1);
	};
	const handleSearch = query => {
		setPage(1);
		console.log('Search query:', query);
		setKeyLetter(query, 1);
	};

	const openModal = image => {
		setSelectedImage(image);
		setIsOpen(true);
	};
	const afterOpenModal = () => {};

	const closeModal = () => {
		setIsOpen(false);
		setSelectedImage(null);
	};
	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	return (
		<>
			<SearchBar onSubmit={handleSearch} />
			<div className={css.container}>
				<ImageGallery images={imagesList} openModal={openModal} />
				<ImageModal
					openModal={openModal}
					closeModal={closeModal}
					afterOpenModal={afterOpenModal}
					modalIsOpen={modalIsOpen}
					images={imagesList}
					getImages={getImages}
					selectedImage={selectedImage}
				/>
				<LoadMoreBtn onClick={handleLoadmore} currentPage={page} />
			</div>
		</>
	);
}

export default App;
