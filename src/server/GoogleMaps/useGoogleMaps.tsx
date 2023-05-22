import { Loader } from "@googlemaps/js-api-loader";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

export const useGoogleMaps = () => {
    const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["places"]
    });

    return { loader };
}