import { localizations } from '@shared/config/vars';

let currentLocale: string = navigator.language.toLowerCase().startsWith('ru') ? localizations.RU : localizations.EN;

export const getCurrentLocale = (): string => currentLocale;
export const setCurrentLocale = (locale: string): void => {
  currentLocale = locale;
};
