import ruData from '../localizations/ru.json'
import store from "../redux/store.js"

class LocalizationService {
  static translate(path) {
    const keys = path.split('.');

    let currentObj = ruData;

    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
        currentObj = currentObj[key];
      } else {
        return path;
      }
    }
    return currentObj;
  }
}

export function translate(path) {
  return LocalizationService.translate(path);
}