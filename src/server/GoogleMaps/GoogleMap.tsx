'use client'
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss"
import { useGoogleMaps } from "./useGoogleMaps";

export const GoogleMap = () => {
    const { loader } = useGoogleMaps();

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