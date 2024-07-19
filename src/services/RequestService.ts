import {BACKEND, localizations, YANDEX_API} from "../vars";
import {Route} from "../models/Route";
import {CustomSelectOption} from "../models/CustomSelectOption";
import {AddressDTO} from "../dto/AddressDTO";
import {WaysDTO} from "../dto/WaysDTO";
import store from "../redux/store";
import {YandexAddressDTO} from "../dto/YandexAdressDTO";

class RequestService {

    static HEADERS = {
        'Content-Type': 'application/json;charset=utf-8'
    }

    static getAddresses(address: string, city: CustomSelectOption, maxAddress = 4): Promise<AddressDTO[]> {
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

    static async getAddressesFromYandex(address: string, city: CustomSelectOption, maxAddress = 5): Promise<AddressDTO[]> {
        const state = store.getState().user;
        const lang = state.localization.value === localizations.RU ? localizations.RU : localizations.EN;
        console.log(city.label)
        const path = YANDEX_API + `&geocode=${city.label}, ${address}&lang=${lang}&format=json&results=${maxAddress}`;

        const response = await fetch(path, {
            method: 'GET',
            headers: RequestService.HEADERS,
        });
        if (!response.ok) {
            console.error('Error occurred while fetching addresses from yandex');
            return [];
        }
        const json = await response.json();
        return json.response.GeoObjectCollection.featureMember.map((featureMember: YandexAddressDTO, i: number): AddressDTO => {
            const geoObject = featureMember.GeoObject;
            const [longitude, latitude] = geoObject.Point.pos.split(' ').map(Number);
            return {label: geoObject.name, latitude: latitude, longitude: longitude, id: i};
        }).filter((item: AddressDTO) => item.label !== city.label)
    }

    static getRoute(route: Route): Promise<WaysDTO> {
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