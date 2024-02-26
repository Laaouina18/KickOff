
import {
	FETCH_PLAYERS,
	FETCH_MATCHES,
	SAVE_MATCH_TO_FAVORITES
  } from './ActionsTypes';
  
  const initialState = {
	players: [],
	matches: [],
	favorites: []

  };
  
  const Reducer = (state = initialState, action) => {
	switch (action.type) {
	 
	  case FETCH_PLAYERS:
		return {
		  ...state,
		  players: action.payload,
		 
		};

	
    case FETCH_MATCHES:
      return { ...state, loading: false, matches: action.payload };

	  case SAVE_MATCH_TO_FAVORITES:
		return { ...state, favorites: [...state.favorites, action.payload] };
	  default:
		return state;
	}
  };
  
  export default Reducer;
  