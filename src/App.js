import "./App.css";

import React, { Component } from "react";
import Navbar from "./componets/Navbar";
import News from "./componets/News";
import Button from "./componets/Button";
export default class App extends Component {
  coder = "ARATHI";
  
  render() {
    return (
      <div>
        <Navbar />
        <News />

        hello my first react based Component {this.coder}
        
      </div>
    );
  }
}

/* npm run start 
163072a67eb648cb9ebff9e1133b71d9 --my api key
shift+right click n u will see open with power shell ussmai jakar npx/npm install create-react-app reactfilename
to create else yaha terminal pe akar also you can make
rcc to get the snippet
methods can be used easily if used in class and general knowlegde ke liye
this.props, this.state so like that  lot of things can be made
structure of the newsmonkey app
navbar component 
newsitem 2*3
newsdetail component
render method is a lifecyle method 


*/
