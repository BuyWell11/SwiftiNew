import {BACKEND} from "../vars";
import {RouteDTO} from "../dto/RouteDTO";
import {Way} from "../models/Way";
import {CustomSelectOption} from "../models/CustomSelectOption";
import {AddressDTO} from "../dto/AddressDTO";
import {WaysDTO} from "../dto/WaysDTO";

class RequestService {

    static HEADERS = {
        'Content-Type': 'application/json;charset=utf-8'
    }

    static getAddresses(address: string, city: CustomSelectOption, maxAddress = 4,): Promise<AddressDTO[]> {
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

    static getRoute(dto: RouteDTO): Promise<WaysDTO> {
        const path = BACKEND +
            `/taxi/?startPoint=${dto.startPoint}&endPoint=${dto.endPoint}&walkingTime=${dto.walkingTime}&city=${dto.city}`;
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


    static getLanguages(): Promise<CustomSelectOption[]> {
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

    static getCities(): Promise<CustomSelectOption[]> {
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