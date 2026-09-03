import ruData from '@shared/localizations/ru.json';
import enData from '@shared/localizations/en.json';
import { localizations } from '@shared/config/vars';
import { getCurrentLocale } from '@shared/config/locale';

type TranslationValue = string | { [key: string]: TranslationValue };

class LocalizationService {
  static translate(path: string): string {
    const data = (getCurrentLocale() === localizations.RU ? ruData : enData) as TranslationValue;
    const value = path.split('.').reduce<TranslationValue | undefined>((current, key) => {
      if (current && typeof current === 'object' && key in current) return current[key];
      return undefined;
    }, data);
    return typeof value === 'string' ? this.decodeHtmlSpecialChars(value) : path;
  }

  static decodeHtmlSpecialChars(text: string): string {
    const map: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': '\u00A0' };
    return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&nbsp;/g, (match) => map[match]);
  }
}

export const translate = (path: string): string => LocalizationService.translate(path);
export default LocalizationService;
