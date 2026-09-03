import type { CustomSelectOption } from '@shared/types/CustomSelectOption';

export const BACKEND_LINK = import.meta.env.VITE_BACKEND_LINK?.trim() ?? '';

export const YANDEX_API = import.meta.env.VITE_YANDEX_API?.trim() ?? '';

export const TG = '@swifti_app';

export const EMAIL = 'swiftitraveler@gmail.com';

export const DONATE = 'https://socprofile.com/swifti/';

export const localizations = {
  RU: 'ru-RU',
  EN: 'en-US',
};

export const localizationOptions: CustomSelectOption[] = [
  { label: 'russian', value: localizations.RU },
  { label: 'english', value: localizations.EN },
];
