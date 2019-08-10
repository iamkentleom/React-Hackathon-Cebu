import React from 'react';
import ReactDOM from 'react-dom';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './index.css';


import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClD0yfdkOWAkjroWHOdfSqUYa4_N5B47Q'
})(MapContainer);


class MapContain extends React.Component {
  render(){
    return (
      <div className="map-size">
      </div>
    )
  }
}

class Details extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return (
      <div className={this.state.isToggleOn ? 'details' : 'details-full'} onClick={this.handleClick}>
        <h2>Fire in Hogwarts</h2>
        Location:<br/>
        Latitude:<br/>
        Longitude:<br/>
        Reporters:<br/>
        Details:<br/>
      </div>
    )
  }
}

function App(){
  return (
    <div>

      <MapContainer />
      <Details />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
