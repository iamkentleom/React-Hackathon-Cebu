
import React from 'react';
import ReactDOM from 'react-dom';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './index.css';
import GoogleMap from "./Components/GoogleMap";


// import GoogleMapReact from 'google-map-react';


let report = false;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={4}
//         style={mapStyles}
//         initialCenter={{
//          lat: -25.344,
//          lng: 131.036
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyClD0yfdkOWAkjroWHOdfSqUYa4_N5B47Q'
// })(MapContainer);


// class MapContain extends React.Component {
//   render(){
//     return (
//       <div className="map-size">
//       </div>
//     )
//   }
// }


class FloatingButton extends React.Component{
  handleClick(){
    report = true
    console.log(report)

  }

  render(){
    return (
      <div onClick={this.handleClick}>
      <button className="floating-btn">
        +
      </button>
      <ReportScreen/>
      </div>
    )
  }
}

 
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div
                className={this.state.isToggleOn ? "details" : "details-full"}
                onClick={this.handleClick}
            >
                <h2>Fire in Hogwarts</h2>
                Location: Sitio Guso
                <br />
                Latitude: 10.667
                <br />
                Longitude: 3.777
                <br />
                Reporters: 12
                <br />
                Details: Very Hot
                <br />
            </div>
        );
    }
}

function App() {
    return <HomeScreen/>;
}

class ReportScreen extends React.Component{
  
  handleClick(){
    report = false
    console.log(report)
  }

  render(){
      return (
        <div className={report ? "report" : "hide"}>
            <button className="close" onClick={this.handleClick}>X</button>
            <h2>REPORT A FIRE</h2>
            Location: <input type="text" /> <br/> <p></p>
            Houses Composition: <select>
                <option value="week">Light Materials</option>
                <option value="month">Mostly Concrete</option>
                <option value="all">Strong Wood</option>
                </select>
                <br/> <p></p>
            Photo: <input type="file" /> <br/> <p></p>
            Additional Notes: <br/><textarea></textarea>
            <button className="btn">REPORT</button>
        </div>
    );
  }
}
  

class HomeScreen extends React.Component {
    // state = {
    //   reporting: false
    // }
    render(){

      return (
          <div >
              {/* <MapContainer /> */}
              <GoogleMap />
              <FloatingButton/>
              <Details />
              <ReportScreen/>
          </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
