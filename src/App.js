import React, { Component } from 'react';
import AreaChart from './Area'
import logo from 'file-loader!./assets/logo.svg';
import map from 'file-loader!./assets/map.jpg';
import './App.css';

var data, width, height;

var chartSeries = [
    {
      field: 'y',
      color: 'aliceblue',
      area: true,
      style: {
        "fill": "#01173a",
        "stroke": "white",
        "strokeWidth": 2
      }
    }
  ],
  x = function(d) {
    return (d.x);
  },
  xScale = 'linear',
  y = function(d) {
    return +d;
  }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: [], width: 0, height: 0};
  }

  static defaultProps = {
      height: height,
      width: width,
      data: data,
      chartSeries: chartSeries,
      x: x,
      y: y
  }

  componentDidMount() {

    var yGrid = 20,
        GRID = 5,
        myThis = this,
        WALK_H = 680,
        WALK_W = 2 * WALK_H,
        PLOT_H = 1.5 * WALK_H / 2,
        POINT_R = 8,
        delay = 100,
        svg = d3.select(".Map-container div svg g")
        .attr("width", WALK_W)
        .attr("height", WALK_H + PLOT_H + POINT_R);

    walk(0, WALK_W / 2, myThis);


    function append_result(x,y,myThis) {
        var result_idy = y / yGrid;

        svg.append("svg:circle")
            .attr("cx", x-10)
            .attr("cy", 100-(result_idy-100)) 
            .attr("r", POINT_R)
            .style("fill", "brown")
            .transition()
            .attr("r", 0)
    }
   

    function walk(x, y, myThis) {
        var y_end, x_end = x + GRID;
        if (Math.random() < 0.5) {
            y_end = y + yGrid;
        } else {
            y_end = y - yGrid;
        } 
        
        myThis.state.data.push({"x": x,"y": y})
        myThis.setState({data: myThis.state.data});

        var helfMapWidth = (document.getElementById('map').offsetWidth)/2;
        var helfMapHeight = (document.getElementById('map').offsetHeight)/2;
        var xAxis = myThis.state.data[myThis.state.data.length-1];
        
        myThis.setState({height: helfMapHeight}); 

        if (xAxis!=undefined) {
          if (xAxis.x>helfMapWidth) {
              myThis.state.data.shift();
              append_result(helfMapWidth,y,myThis);
          }
          else {
              append_result(x,y,myThis);  
              myThis.setState({width: myThis.state.width+GRID});                          
              
          }
        }
        
        window.setTimeout(function() {
            walk(x_end, y_end, myThis);
        }, delay);
    }
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Visual Trade Graph</h2>
        </div>
        <div className="App-body">
          <div className="Map-container" id="Map-container">
            <img src={map} className="map" id="map" alt="map" />
            <AreaChart
                width= {this.state.width}
                height={this.state.height}
                data= {this.state.data}
                chartSeries= {chartSeries}
                x= {x}
                y= {y}
                xScale= {xScale}
              />            
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
