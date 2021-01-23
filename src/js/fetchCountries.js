const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountryes(query) {
    const requestParams = `${query}`;
    return fetch(baseUrl + requestParams).then(response => response.json());
  },
};