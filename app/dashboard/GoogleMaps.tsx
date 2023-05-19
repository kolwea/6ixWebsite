import React, { ReactNode, useEffect, useState } from "react";

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

interface GoogleMapsProviderProps {
    children?: ReactNode
}

export function GoogleMapsProvider({ children }: GoogleMapsProviderProps) {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const googleMapScript = loadMapsApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);

    return (
        <div className="GoogleMapsProvider">
            {scriptLoaded && (children)}
            <div id="map"></div>
        </div>
    );
}

const Map = () => {

}