import request from 'superagent';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_Modal';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TRENDING_GIFS = 'TRENDING_GIFS';

const API_KEY = "AEUt8z3mb7Hz69PBW3IYWJCKG0tTjF9k";
const SEARCH_API_URL = "https://api.giphy.com/v1/gifs/search?rating=G&lang=en&offset=0&q=";
const TRENDING_API_URL = "https://api.giphy.com/v1/gifs/trending?limit=25&rating=G"
const API_KEY_QUERY = `&api_key=${API_KEY}`;

export function requestGifs(term = null) {
	const data = request.get(`${SEARCH_API_URL}${term.replace(/\s/g, '+')}${API_KEY_QUERY}`);

	return {
		type: REQUEST_GIFS,
		payload: data
	}
}

export function trendingGifs(term=null) {
	const data = request.get(`${TRENDING_API_URL}${API_KEY_QUERY}`);

	return {
		type: TRENDING_GIFS,
		payload: data
	}
}

export function openModal(gif) {

	return {
		type: OPEN_MODAL,
		gif
	}
}

export function closeModal() {

	return {
		type: CLOSE_MODAL
	}
}