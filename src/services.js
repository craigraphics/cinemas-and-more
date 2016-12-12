import Vue from 'vue';

export default {
  fetchWebService(url, params) {
    return Vue.http.get(url, params)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}
