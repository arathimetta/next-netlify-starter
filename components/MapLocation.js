import React, { useEffect, useRef, Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { style } from "@mui/system";


class MapLocation extends Component {

    render() {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
        return (
            <div style={{ marginTop: "32px" }}>
                <Map
                    containerStyle={containerStyle}
                    google={this.props.google}
                    zoom={10}
                    style={{ width: "400px", height: "400px", position: 'relative !important' }}
                    initialCenter={{
                        lat: 33.064620,
                        lng: -96.829950
                    }}
                >
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'OFFICE'}
                        position={{ lat: 33.064620, lng: -96.829950 }} />
                </Map>
                <p style={{ marginTop: "32px" }}>
                    Our Offiice:
                </p>
                <p>
                    6010 W Spring Creek Pkwy, Ste.216, Plano, TX-75024
                </p>
            </div>
        );
    }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyASqbSkOKiCrynWxGQbyggkoyQFVKNJoOQ" })(MapLocation)
