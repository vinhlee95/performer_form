import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
   constructor(props) {
      super(props);
      this.state = { location: {} };
   }

   componentDidMount() {
      this.loadMap()
   }

   loadMap() {
      // check whether google is available
      if(this.props && this.props.google) {
         const { google } = this.props;
         const maps = google.maps;

         const mapRef = this.refs.map;
         // node is a reference to the actual DOM element
         const node = ReactDOM.findDOMNode(mapRef)

         let zoom = 14;
         let lat = '60.169855699';
         let lng = '24.93837910';
         const center = new maps.LatLng(lat, lng);
         const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom,
         });
         this.map = new maps.Map(node, mapConfig);
      }
   }

   render() {
      const style = {
         width: '250px',
         height: '250px',
      }
      return (
         <div ref='map'>
            Loading map...
         </div>
      );
   }
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyBLrW_oMKlUduQ8o-isIZVgsmcXTi67D9k'
})(MapContainer);