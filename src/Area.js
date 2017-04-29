import {
  default as React,
  Component,
  PropTypes,
} from 'react';


import {
  Area,
  Chart
} from 'react-d3-shape';

export default class AreaChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
      showScatter: false,
      margins: {top: 0, right: 20, bottom: -20, left: -5}
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      categoricalColors
    } = this.props;



    return (
      <div>
        <Chart
          {...this.props}
          width= {width}
          height= {height}
          data= {data}
          chartSeries= {chartSeries}
          >
          <Area
            chartSeries= {chartSeries}
          />
        </Chart>
      </div>
    )
  }
}