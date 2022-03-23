import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { style } from "@mui/system";


class MapLocation extends Component {

    render() {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
        const lat = 33.0639426;
        const lng = -96.8326827;
        //const addr = "6010 Spring Creek Pkwy, Plano, TX 75024";
        return (
            <div style={{ marginTop: "32px" }}>
                <Map
                    containerStyle={containerStyle}
                    google={this.props.google}
                    zoom={10}
                    style={{ width: "100%", height: "400px", position: 'relative !important' }}
                    initialCenter={{ lat, lng }}
                >
                    <Marker
                        title={'TEKSERVS Office Location'}
                        name={'OFFICE'}
                        position={{ lat, lng }}
                        onClick={() => window.open("https://maps.google.com?q=" + lat + ',' + lng)}
                    />
                </Map>
                <p style={{ marginTop: "32px" }}>
                    Our Offiice:
                </p>
                <a onClick={() => window.open("https://maps.google.com?q=" + lat + ',' + lng)}>
                    <p >
                        6010 W Spring Creek Pkwy, Ste.216,
                    </p>
                    <p>
                        Plano, TX-75024
                    </p>
                </a>
            </div>
        );
    }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyASqbSkOKiCrynWxGQbyggkoyQFVKNJoOQ" })(MapLocation)
