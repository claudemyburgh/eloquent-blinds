import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
    const coordinates = { lat: -33.896008716790874, lng: 18.649658926616663 };

    return (
        <div className={`text-white h-[500] w-full`}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
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
