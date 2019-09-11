import {
  START_LOADING_ALL_POKEMON,
  START_LOADING_SINGLE_POKEMON,
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const loadingReducer = (state = { loading: true }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_ALL_POKEMON:
      return {
        loading: {
          allPokemon: true
        }
       };

    case START_LOADING_SINGLE_POKEMON:
    return {
      loading: {
        singlePokemon: true
      }
     };

    case RECEIVE_ALL_POKEMON:
    return {
      loading: {
        allPokemon: false
      }
     };

    case RECEIVE_SINGLE_POKEMON:
    return {
      loading: {
        singlePokemon: false
      }
     };

    default:
      return state;
  }
};

export default loadingReducer;
