import { useState } from 'react';
import axios from 'axios';

const accessKey = 'Os7TaE4XurjIc-ybEn3s3Y85xLM-Cd4XLA8RFanl3yQ';
axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchImages = async (query = '', page = 1) => {
	const perPage = 6;
	const url = query
		? `/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=${perPage}`
		: `/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`;

	const response = await axios.get(url);
	return query ? response.data.results : response.data;
};

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

	return [isLoading, error, imagesList, getImages];
};
