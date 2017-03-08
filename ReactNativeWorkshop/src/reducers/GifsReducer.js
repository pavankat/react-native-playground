import {
  SET_CATEGORY,
  GET_GIFS_REQUESTED,
  GET_GIFS_SUCCESS,
  GET_GIFS_FAILURE,
  DISLIKE,
  LIKE_REQUESTED,
  LIKE_SUCCESS,
  LIKE_FAILURE
} from '../actions/actions';

export default function GifsReducer(state = {category: null, items: {}, isLoading: false, error: null}, action) {

  switch(action.type) {

    case SET_CATEGORY:
      return {...state, category: action.payload.category};

    case LIKE_REQUESTED:
    case GET_GIFS_REQUESTED:
      return {...state, isLoading: true};

    case GET_GIFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: convertGiphyResponse(action.payload.gifs)
      };

    case DISLIKE:
    case LIKE_SUCCESS:
      let filteredItems = state.items;
      delete filteredItems[action.payload.gif.id];

      return {
        ...state,
        isLoading: false,
        items: Object.assign({}, filteredItems)
      };

    case GET_GIFS_FAILURE:
    case LIKE_FAILURE:
      return {...state, isLoading: false, error: action.payload.error};

    default:
      return state;
  }

}

/**
 * Convert an array of objects
 *
 * @param {Array} array
 * @param {String|Number} key
 *
 * Example Input:
 * param key = 'name';
 * param array = [{name: 'frank', age: 19}, {name: 'joe', age: 22}, {name: 'bob', age: 44}]
 *
 * Example return:
 * {
 *   'frank': {name: 'frank', age: 19} ,
 *   'joe': {name: 'joe', age: 22} ,
 *   'bob': {name: 'bob', age: 44} ,
 * }
 */
function convertGiphyResponse(gifs){
  let normalizedObj = {};

  gifs.forEach((gif) => {
    let formattedUri = gif.images.fixed_width.url
    normalizedObj[gif.id] = {id: gif.id, uri: formattedUri};
  });

  return normalizedObj;

}
