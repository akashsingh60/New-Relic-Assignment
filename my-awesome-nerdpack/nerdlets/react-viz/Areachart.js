import React from 'react';
import { AreaChart } from 'nr1'

export default class Areachart extends React.Component {
  render(){
    
    return <AreaChart
  accountId={4038258}
  query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDAzODI1OHxJTkZSQXxOQXwzMjc0NTM3OTA3MDM0OTY1NzQx' TIMESERIES auto"
  fullWidth
/>;
  }
}