import ruData from '../localizations/ru.json';
import enData from '../localizations/en.json';
import store from '../redux/store';
import { localizations } from "../vars";
class LocalizationService {
    static translate(path) {
        const state = store.getState().user;
        const keys = path.split('.');
        let currentObj = state.localization.value === localizations.RU ? ruData : enData;
        for (const key of keys) {
            if (currentObj && typeof currentObj === 'object' && key in currentObj) {
                currentObj = currentObj[key];
            }
        }
        return typeof currentObj === 'string' ? this.decodeHtmlSpecialChars(currentObj) : path;
    }
    static decodeHtmlSpecialChars(text) {
        const map = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'",
            '&nbsp;': '\u00A0'
        };
        return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&nbsp;/g, m => map[m]);
    }
}
export function translate(path) {
    return LocalizationService.translate(path);
}
