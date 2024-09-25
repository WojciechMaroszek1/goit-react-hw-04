import { useState } from 'react';
import fetchImages from '../api/fetchImages';

export const useGetImages = () => {
	const [imagesList, setImagesList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getImages = async (query = '', page = 1) => {
		setIsLoading(true);
		try {
			const newImage = await fetchImages(query, page);
			if (page === 1) {
				setImagesList(newImage);
			} else {
				setImagesList(prevImage => [...prevImage, ...newImage]);
			}
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, imagesList, getImages };
};
