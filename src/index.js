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
        zoom={4}
        style={mapStyles}
        initialCenter={{
         lat: -25.344,
         lng: 131.036
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

class FloatingButton extends React.Component{
  handleClick(){
    console.log('hello')
  }

  render(){
    return (
      <button className="floating-btn" onClick={this.handleClick}>
        +
      </button>
    )
  }
}

class Report extends React.Component{
  render(){
    return (
      <div>
        
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
      <FloatingButton />
      <Details />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
