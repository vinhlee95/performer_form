import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

   render() {
      return (
         <Map 
            google={this.props.google} 
            zoom={14}
            style={{width: '250px', height: '250px'}} >

         <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

         {/* <InfoWindow onClose={this.onInfoWindowClose}>
               <div>
               <h1>{this.state.selectedPlace.name}</h1>
               </div>
         </InfoWindow> */}
         
         </Map>
      );
   }
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyBLrW_oMKlUduQ8o-isIZVgsmcXTi67D9k'
})(MapContainer);