import {useState, useEffect} from 'react';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(`Ошибка отслеживания геолокации: ${error.message}`);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return {coordinates, error};
};

export default useGeolocation;
