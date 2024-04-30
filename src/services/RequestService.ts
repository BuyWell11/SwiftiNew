import {BACKEND} from "../vars";
import {RouteDTO} from "../dto/RouteDTO";

class RequestService {

    static HEADERS = {
        'Content-Type': 'application/json;charset=utf-8'
    }

    static getAddresses(address: string, maxAddress = 4, city: string) {
        const path = BACKEND + `/addresses?address=${address}&addressesNumber=${maxAddress}&city=${city}`;

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

    static getRoute(dto: RouteDTO) {
        const path = BACKEND +
            `/optimal-route/?startPoint=${dto.startPoint}&endPoint=${dto.endPoint}}&walkingTime=${dto.walkingTime}`;

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
            })
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
            })
    }
}

export default RequestService;