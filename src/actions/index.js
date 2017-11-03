import request from 'superagent';

export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = "https://api.giphy.com/v1/gifs/search?rating=G&lang=en&offset=0&q="
const API_KEY = "&api_key=AEUt8z3mb7Hz69PBW3IYWJCKG0tTjF9k"

export function requestGifs(term = null) {
	const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

	return {
		type: REQUEST_GIFS,
		payload: data
	}
}