import axios from 'axios';

const accessKey = 'Os7TaE4XurjIc-ybEn3s3Y85xLM-Cd4XLA8RFanl3yQ';
axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchImages = async (query = '', page = 1) => {
	const perPage = 5;

	const url = query
		? `/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=${perPage}`
		: `/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`;

	const response = await axios.get(url);
	return query ? response.data.results : response.data;
};

export default fetchImages;
