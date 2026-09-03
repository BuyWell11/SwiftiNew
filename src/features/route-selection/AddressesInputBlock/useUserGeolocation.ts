import { useEffect, useState } from 'react';
import { useToast } from '@shared/hooks/useToast';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import type { AddressDTO } from '@shared/api/types/AddressDTO';

export function useUserGeolocation(label: string): AddressDTO | null {
  const { showToast } = useToast();
  const [position, setPosition] = useState<AddressDTO | null>(null);

  useEffect(() => {
    const successHandler = ({ coords }: GeolocationPosition) => {
      setPosition({
        label,
        latitude: coords.latitude,
        longitude: coords.longitude,
        id: 0,
      });
    };

    const errorHandler = (error: GeolocationPositionError) => {
      showToast(getErrorMessage(error, 'Unable to access current location'), 'error');
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, [label, showToast]);

  return position;
}
