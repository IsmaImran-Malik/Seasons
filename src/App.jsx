import { useState } from 'react'
import React from 'react'
import './App.css'
import SeasonsDisplay from './SeasonsDisplay'
import Spinner from './spinner'

// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err),
//   );

//   return (
//     <>
//       <div>hey there!</div>
//     </>
//   )
// }


class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {lat : null, errorMessage : ""}; //this syntax is only used once when state is initialized.
  // }
  // or
  state = {lat : null, errorMessage : ""};


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat : position.coords.latitude}), //setState(...) used to update state.
      // err => this.setState(error )
      err => this.setState({errorMessage : err.message})
      //we can also add msg instead of showing error on console by err => console.log("msg here")
    );
  }

  renderContent(){
     if (this.state.lat && !this.state.errorMessage){
        // return <div>Latitude: {this.state.lat}</div>
        return <SeasonsDisplay lat={this.state.lat}/>
      }
      if (!this.state.lat && this.state.errorMessage){
        return <div>Error : {this.state.errorMessage}</div>
      }
      else{
        return <div><Spinner message="Please accept the location request!"/></div>
      }
  }

  render(){
     return <div>{this.renderContent()}</div>
  }
}

export default App