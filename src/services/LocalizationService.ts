import ruData from '../localizations/ru.json'
import enData from '../localizations/en.json'
import store from '../redux/store'
import {localizations} from "../vars";

class LocalizationService {
    static translate(path: string): string {
        const state = store.getState().user

        const keys = path.split('.');

        let currentObj: any = state.localization.value === localizations.RU ? ruData : enData;

        for (const key of keys) {
            if (currentObj && typeof currentObj === 'object' && key in currentObj) {
                currentObj = currentObj[key];
            }
        }
        return typeof currentObj === 'string' ? currentObj : path;
    }
}

export function translate(path: string) {
    return LocalizationService.translate(path);
}