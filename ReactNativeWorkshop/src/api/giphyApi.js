import 'whatwg-fetch'; //why a polyfill? well Safari doesn't yet support `fetch` that is why :p
const API_KEY = 'dc6zaTOxFJmzC';


export function getGiphyGifs(category){
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${category.title}&api_key=${API_KEY}&limit=10`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};
