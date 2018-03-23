import React, { Component } from 'react';
import logo from './logo.svg';

import Square from "./components/square.js";
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery";

const border = {
    border : "1px black solid"
};

class App extends Component {

    constructor(){
        super();

        this.state = {
            highlighted : []
        };
    }


     handler(e){

        console.log("clicked");

        //console.log(e);

        var index = $(e.target).attr("ky");
        var s = this.state.highlighted;

        console.log(s);
      console.log(index);


         s.push(index);
         console.log(s);
        this.setState({
            highlighted : s
        });


        console.log(this.state);

        $(e.target).css("background-color","yellow");

    }


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <ul>
              State :  {this.state.highlighted.filter((index,i,a)=>{ return a.indexOf(index) ==i }).map((index)=> <li>{index}</li>)}
          </ul>



          <div className="row">
              <div className="offset-lg-4 col-lg-4">
                <div className="row">
                    <Square ky="1" clk={this.handler.bind(this)}/>
                    <Square ky="2" clk={this.handler.bind(this)}/>
                    <Square ky="3" clk={this.handler.bind(this)}/>
                </div>
                  <div className="row">
                      <Square ky="5" clk={this.handler.bind(this)}/>
                      <Square ky="6" clk={this.handler.bind(this)}/>
                      <Square ky="7" clk={this.handler.bind(this)}/>
                  </div>
                  <div className="row">
                      <Square ky="4" clk={this.handler.bind(this)}/>
                      <Square ky="8" clk={this.handler.bind(this)}/>
                      <Square ky="9" clk={this.handler.bind(this)}/>
                  </div>
                </div>
              </div>


          </div>

    );
  }
}

export default App;
