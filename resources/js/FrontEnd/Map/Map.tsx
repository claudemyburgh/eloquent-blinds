import React from "react";
import GoogleMapReact from "google-map-react";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

const Map = () => {
    const { api } = usePage<PageProps>().props;

    const coordinates = { lat: -33.896008716790874, lng: 18.649658926616663 };

    return (
        <div className={`text-white h-[500] w-full`}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: api.maps,
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={}
            />
        </div>
    );
};

export default Map;
