import ruData from '../localizations/ru.json'
import store from '../redux/store'

class LocalizationService {
    static translate(path: string): string {
        const keys = path.split('.');

        let currentObj: any = ruData;

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