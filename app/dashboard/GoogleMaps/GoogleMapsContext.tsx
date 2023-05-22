import { createContext } from "react";

export type GoogleMapsContextType = {
    map?: google.maps.Map,
    setMap?: (map: google.maps.Map) => void,
    scriptLoaded?: boolean,
    setScriptLoaded?: (val: boolean) => void,
    mapOptions?: google.maps.MapOptions,
    setMapOptions?: (opts: google.maps.MapOptions) => void,
}

export const initialContext: GoogleMapsContextType = {
    mapOptions: {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    }
}

export const GoogleMapsContext = createContext(initialContext);