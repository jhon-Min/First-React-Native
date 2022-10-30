import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState();

  async function getLocation() {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getLocation();
  }, []);

  return { location };
}
