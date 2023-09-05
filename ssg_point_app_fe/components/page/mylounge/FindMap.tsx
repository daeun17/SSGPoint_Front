

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function FindMap() {
    const containerStyle = {
        width: '400%',
        height: '400px'
    };

    const center = {
        lat: 37.5665, // 서울의 위도
        lng: 126.9780  // 서울의 경도
    };
    const malls = [
        { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261, imageUrl: '/images/point-icon.png' },
        // { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
        // { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
        // { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
        // { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
        // { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
        // { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 },
    ];

    const mapStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ];

    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyDQSqTNNjT3emVboEA_MautXqAoBaCZEQw"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                        styles: mapStyles
                    }}
                >
                    {malls.map((mall, index) => {
                        const markerIcon = {
                            url: mall.imageUrl,
                            scaledSize: new window.google.maps.Size(30, 30)
                        };
                        return (
                            <Marker
                                key={index}
                                position={{ lat: mall.lat, lng: mall.lng }}
                                label={mall.label}
                                title={mall.name}
                                icon={markerIcon}
                            />
                        );
                    })}

                </GoogleMap>
            </LoadScript>
        </div>
    )
}
