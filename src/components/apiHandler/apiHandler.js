import React, { Component } from 'react';
import axios from 'axios';

class ApiHandler extends Component {
    constructor() {
        super(); 
        this.state = {
            results: ''
        }
    }
   
    componentDidMount() {
        let services = google.maps;
        // console.log(services)
        const pyrmont = new services.LatLng(-33.8665433,151.1956316);
        const vmy = new services.places.PlacesService( {
            center: pyrmont
        });
        // vmy.nearbySearch(request, ((res, stat) => { console.log(res, stat)}));
        console.log(vmy);
        // service  = new google.maps.places.PlacesService(map);
        // var request = {
        //     location: pyrmont,
        //     radius: '500',
        //     type: ['restaurant']
        //   };
        // var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
        // const random = new google.maps.places.PlacesService();
        // let service;
        
        // var request = {
        //     location: 'pyrmont',
        //     radius: '500',
        //     type: ['restaurant']
        //   };
        
        //   service = new google.maps.places.PlacesService();
        //   service.nearbySearch(request, ((res, stat) => { console.log(res, stat)}));
} 
    
    render() {     
        return(
            <Geosuggest></ Geosuggest>
        )
    }
}


export default ApiHandler;