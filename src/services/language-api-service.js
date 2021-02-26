import config from '../config'
import TokenService from './token-service';


const LanguageApiService = {
    getLanguage() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
    getHead() {
      return fetch(`${config.API_ENDPOINT}/language/head`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`
          },
        })
          .then(res => 
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()    
          )
      },
      submitGuess(guess) {

        return fetch(`${config.API_ENDPOINT}/language/guess`, {
          method: 'POST',
          headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ guess: guess }),
        })
        .then(res => {
          if (!res.ok) {
            return res.json().then(e => Promise.reject(e.error))
          }
          return res.json()
        })
        .catch(e => console.error(e));
      }
}

export default LanguageApiService;