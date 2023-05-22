import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from './styles.module.scss'


export const GoogleMap = () => {
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
            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            const mapWrapper = document.getElementById('mapWrapper') as HTMLElement
            const map = new Map(mapWrapper, mapOptions);
            map.getDiv().className = styles.mapWrapper;
        })
    }, [mapOptions]);

    return (<div id="mapWrapper"></div>)
}