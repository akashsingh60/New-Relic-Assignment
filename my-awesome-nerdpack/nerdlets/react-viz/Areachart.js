import React from 'react';
import { AreaChart } from 'nr1'

export default class Areachart extends React.Component {
  render(){
    // const data = [
      // {
      //   metadata: {
      //     id: 'series-1',
      //     name: 'Serie 1',
      //     color: '#a35ebf',
      //     viz: 'main',
      //     units_data: {
      //       x: 'TIMESTAMP',
      //       y: 'BYTES',
      //     },
      //   },
      //   data: [
      //     {
      //       x: 1691352314303,
      //       y: 21400,
      //     },
      //     {
      //       x: 1691355914303,
      //       y: 12200,
      //     },
      //     {
      //       x: 1691359514303,
      //       y: 9300,
      //     },
      //     {
      //       x: 1691363114303,
      //       y: 14500,
      //     },
      //     {
      //       x: 1691366714303,
      //       y: 27500,
      //     },
      //     {
      //       x: 1691370314303,
      //       y: 24700,
      //     },
      //   ],
      // },
      // {
      //   metadata: {
      //     id: 'series-2',
      //     name: 'Serie 2',
      //     color: '#85c956',
      //     viz: 'main',
      //     units_data: {
      //       x: 'TIMESTAMP',
      //       y: 'BYTES',
      //     },
      //   },
      //   data: [
      //     {
      //       x: 1691352314303,
      //       y: 8800,
      //     },
      //     {
      //       x: 1691355914303,
      //       y: 1400,
      //     },
      //     {
      //       x: 1691359514303,
      //       y: 4600,
      //     },
      //     {
      //       x: 1691363114303,
      //       y: 5200,
      //     },
      //     {
      //       x: 1691366714303,
      //       y: 14100,
      //     },
      //     {
      //       x: 1691370314303,
      //       y: 19300,
      //     },
      //   ],
      // },
      // {
      //   metadata: {
      //     id: 'events',
      //     name: 'Events',
      //     color: 'red',
      //     viz: 'event',
      //   },
      //   data: [
      //     {
      //       x0: 1691355914303,
      //       x1: 1691359514303,
      //     },
      //     {
      //       x0: 1691366714303,
      //       x1: 1691366714303,
      //     },
      //   ],
      // },
    // ];
  
    return <AreaChart
  accountId={4038258}
  query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDAzODI1OHxJTkZSQXxOQXwzMjc0NTM3OTA3MDM0OTY1NzQx' TIMESERIES auto"
  fullWidth
/>;
  }
}