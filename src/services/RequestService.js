import {BACKEND} from "../vars.js";

class RequestService {

  static HEADERS = {
    'Content-Type': 'application/json;charset=utf-8'
  }

  static getAddresses(address, maxAddress = 4) {
    const path = BACKEND + `/addresses?address=${address}&addressesNumber=${maxAddress}`;

    return fetch(path, {
      method: 'GET',
      headers: RequestService.HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error occurred while fetching addresses:', error);
        return [];
      });
  }

  static getOptimalRoute(from, to, radius) {
    const path = BACKEND +
      `/optimal-route/?startPoint=${from.latitude},${from.longitude}&endPoint=${to.latitude},${to.longitude}&radius=${radius}`;

    return fetch(path, {
      method: 'GET',
      headers: RequestService.HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error occurred while fetching addresses:', error);
        return [];
      });
  }

  static getRoute(from, to) {
    const path = BACKEND +
      `/route/?startPoint=${from.latitude},${from.longitude}&endPoint=${to.latitude},${to.longitude}`;

    return fetch(path, {
      method: 'GET',
      headers: RequestService.HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error occurred while fetching addresses:', error);
        return [];
      });
  }

  static getLanguages() {
    const path = BACKEND + '/data/?type=languages';

    return fetch(path, {
      method: 'GET',
      headers: RequestService.HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
  }

  static getCities() {
    const path = BACKEND + '/data/?type=cities';

    return fetch(path, {
      method: 'GET',
      headers: RequestService.HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
  }
}

export default RequestService;