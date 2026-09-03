import { useEffect } from 'react';
import { useLazyGetYandexAddressesQuery } from '@shared/api/endpoints/addressApi';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import { useDebounce } from '@shared/hooks/useDebounce';
import { useToast } from '@shared/hooks/useToast';
import type { AddressDTO } from '@shared/api/types/AddressDTO';
import type { CustomSelectOption } from '@shared/types/CustomSelectOption';

type UseAddressSuggestionsParams = {
  address: string;
  city: CustomSelectOption | null;
  ignoredAddress?: string;
  onChange: (addresses: AddressDTO[]) => void;
  errorMessage: string;
};

export function useAddressSuggestions({ address, city, ignoredAddress, onChange, errorMessage }: UseAddressSuggestionsParams): void {
  const { showToast } = useToast();
  const [getYandexAddresses] = useLazyGetYandexAddressesQuery();
  const debouncedAddress = useDebounce(address.trim(), 1000);

  useEffect(() => {
    if (!city || debouncedAddress === ignoredAddress) return;

    if (!debouncedAddress) {
      onChange([]);
      return;
    }

    let isCurrentRequest = true;

    void getYandexAddresses({ address: debouncedAddress, city })
      .unwrap()
      .then((data) => {
        if (isCurrentRequest) onChange(data);
      })
      .catch((error: unknown) => {
        if (isCurrentRequest) showToast(getErrorMessage(error, errorMessage), 'error');
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [city, debouncedAddress, errorMessage, getYandexAddresses, ignoredAddress, onChange, showToast]);
}
