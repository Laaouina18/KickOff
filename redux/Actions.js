
import {
	FETCH_PLAYERS,
	SAVE_MATCH_TO_FAVORITES,
	FETCH_MATCHES,
	FETCH_TOURNAMENTS
  } from './ActionsTypes';
  
  import axios from 'axios';

  export const fetchPlayers = () => {
	return async (dispatch) => {
        try {
            const res = await  axios.get('https://www.footballtransfers.com/en/players/actions/overview/overview')
			
            dispatch({ type: FETCH_PLAYERS, payload: res.data.records });
        } catch (error) {
            console.error(error);
        }
    }
  };
  
export const  FectchTournaments=()=>{
	return async (dispatch) => {
	  try {
		const res= await axios.get('https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football');
	
		dispatch({ type: FETCH_TOURNAMENTS, payload: res.data.uniqueTournaments });
		
	  } catch (error) {
		console.error(error);
	  }
	};
   };

  export const fetchMatches = () => {
	return async (dispatch) => {
		try {
			const currentDate = new Date().toISOString().slice(0, 10);
		  const res = await axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/'+currentDate);
		  dispatch({ type: FETCH_MATCHES, payload: res.data.events});
		} catch (error) {

		  console.error(error);
		}
	  };
	
  };
  


  
export const saveMatchToFavorites = (match) => {
	console.log(match);
	return {
	type: SAVE_MATCH_TO_FAVORITES,
	payload: match
  }
}
 
  