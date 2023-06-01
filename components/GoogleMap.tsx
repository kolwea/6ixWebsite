'use client'
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss"

import { Loader } from "@googlemaps/js-api-loader";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

const useGoogleMapsApi = () => {
    const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["places"]
    });

    return { loader };
}

export const GoogleMap = () => {
    const { loader } = useGoogleMapsApi();

    const [mapOptions, setMapOptions] = useState<google.maps.MapOptions>({
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    })

    useEffect(() => {
        loader.load().then(async () => {
            console.log("Google maps loaded.")
            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            const mapWrapper = document.getElementById('mapWrapper') as HTMLElement
            const map = new Map(mapWrapper, mapOptions);
            map.getDiv().className = styles.mapWrapper;
        })
    }, [mapOptions]);

    return (<div id="mapWrapper"></div>)
}