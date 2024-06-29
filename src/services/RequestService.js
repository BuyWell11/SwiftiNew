import { BACKEND } from "../vars";
class RequestService {
    static getAddresses(address, city, maxAddress = 4) {
        const path = BACKEND + `/addresses?address=${address}&addressesNumber=${maxAddress}&city=${city.value}`;
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
    static getRoute(route) {
        const path = BACKEND +
            `/taxi/?startPoint=${route.startPoint}&endPoint=${route.endPoint}&walkingTime=${route.walkingTime}&city=${route.city}`;
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
            return null;
        });
    }
    static getLanguages() {
        const path = BACKEND + '/data/languages';
        return fetch(path, {
            method: 'GET',
            headers: RequestService.HEADERS,
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
    static getCities() {
        const path = BACKEND + '/data/cities';
        return fetch(path, {
            method: 'GET',
            headers: RequestService.HEADERS,
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
}
RequestService.HEADERS = {
    'Content-Type': 'application/json;charset=utf-8'
};
export default RequestService;
