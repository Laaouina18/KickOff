
import {
	FETCH_PLAYERS,
	FETCH_MATCHES,
	SAVE_MATCH_TO_FAVORITES,
	FETCH_TOURNAMENTS
  } from './ActionsTypes';
  
  const initialState = {
	players: [],
	matches: [],
	favorites: [],
	tournaments:[]

  };
  
  const Reducer = (state = initialState, action) => {
	switch (action.type) {
	 
	  case FETCH_PLAYERS:
		return {
		  ...state,
		  players: action.payload,
		 
		};

	
    case FETCH_MATCHES:
      return { ...state,  matches: action.payload };

	case SAVE_MATCH_TO_FAVORITES:
		console.log('reducer' , action.payload);
		return { ...state, favorites:[...state.favorites, action.payload] };
	case FETCH_TOURNAMENTS:
		return{
			...state,tournaments:action.payload
		}
	  default:
		return state;
	}
  };
  
  export default Reducer;
  