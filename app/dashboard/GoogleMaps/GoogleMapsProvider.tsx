import React, { ReactNode, useEffect, useState } from "react";
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMapsContextType } from './GoogleMapsContext'
import { createContext } from "vm";

const loadMapsApi = () => {
    const url =
        'https://maps.googleapis.com/maps/api/js?key=' +
        "AIzaSyCHfrmurbBUCNNmsOs-NeEjQr_kVkwXys8" +
        '&libraries=places&language=no&region=NO&v=quarterly';
    console.log("Google key:" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    const scripts = document.getElementsByTagName('script');
    for (const script of Array.from(scripts)) {
        if (script.src.indexOf(url) === 0) return script;
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = url;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    return googleMapScript;
};

type GoogleMapsProviderOpts = {
    children?: ReactNode,
    context: React.Context<GoogleMapsContextType>;
}

export function GoogleMapsProvider({ children, context }: GoogleMapsProviderOpts) {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [mapOptions, setMapOptions] = useState<google.maps.MapOptions>({
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    })
    const [map, setMap] = useState<google.maps.Map>();

    const loader = new Loader({
        apiKey: "AIzaSyCHfrmurbBUCNNmsOs-NeEjQr_kVkwXys8",
        version: "weekly",
        libraries: ["places"]
    });

    useEffect(() => {
        loader.load().then(async () => {
            setScriptLoaded(true);
            console.log("Google maps loaded.")
            // const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            // const map = new Map(document.getElementById('mapWrapper') as HTMLElement, mapOptions);
            // setMap(map);
        })
    }, [mapOptions]);

    const contextValue = createContext({
        scriptLoaded, setScriptLoaded, mapOptions, setMapOptions, map, setMap
    })

    return (
        <context.Provider value={contextValue}>
            {scriptLoaded && (children)}
        </context.Provider>

    );
}
