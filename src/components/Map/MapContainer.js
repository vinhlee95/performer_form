import React, { Component } from 'react';
import { GoogleApiComponent } from 'google-maps-react';

export class MapContainer extends Component {
   render() {
      if(!this.props.loaded) {
         return <div>Loading...</div>
      }
      return (
         <div>Map will go here</div>
      )
   }
}

export default GoogleApiComponent({
   apiKey: 'AIzaSyDsBsLSyNaauyW-A5DMARMS6aUMw-qAT4g'
})(MapContainer);