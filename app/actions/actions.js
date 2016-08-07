import {
  TOGGLE_COLOR,
  TOGGLE_GIF,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
  SECRET_CODE,
} from '../constants/Constants';
import {
  exampleRequest,
} from '../requester';

/** Toggle the hello world color */
export function toggleColor() {
  return { type: TOGGLE_COLOR };
}

export function getSecretCode() {
  return { type: SECRET_CODE, code: 'omgThisIsSoSecretAndOnlyInThisFile' };
}

/** An example async action using the request module */
export function toggleGif() {
  return dispatch => {
    fetch('http://api.giphy.com/v1/gifs/search?q=rainbow+cat&limit=100&api_key=12PnkylgHYUVgs')
      .then((response) => response.json())
      .then(json => {
        var rand = Math.floor(Math.random() * 50) + 1 
        var url = json.data[rand].images.fixed_width.url;

        dispatch({ type: TOGGLE_GIF, data: url, });
      });
  };
}
