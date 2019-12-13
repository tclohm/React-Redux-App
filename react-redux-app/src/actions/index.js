import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

// MARK - action creator
export const getQuote = () => dispatch => {
	dispatch({ type: FETCH_QUOTE_START });
	axios.defaults.headers.get['Content-Type'] = 'application/x'
	axios.get("https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote")
		 .then(res => { 
		 	console.log(res);
		  dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.value }) }
		 )
		 .catch(err => { dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.message }) }
		 )
};