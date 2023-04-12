import * as React from 'react';


export default function GregTime(props) {
  const svgH = 1100;
  const svgW = 480;
  const svgGuageH = 20;
  
  return (
    <div style={{float: 'left', margin: '15px'}}>
      <h2>Gregorian Time</h2>
      <h3>{(props.forma)}</h3>
      <div>
      <svg width={svgW} height={svgGuageH}>
        <g>
          <rect width={svgW} height={svgH} fill="black" />
          <rect width={(props.second)*8} height={svgH} fill="blue" />
        </g>
        <text y="16" fill="white">Second: {props.second}</text>
      </svg>
      </div>
      <div>
      <svg width={svgW} height={svgGuageH}>
        <g>
          <rect width={svgW} height={svgH}fill="black" />
          <rect width={props.minute*8} height={svgH} fill="blue" />
        </g>
        <text y="16" fill="white">Minute: {props.minute}</text>
      </svg>
      </div>
      <div>
      <svg width={svgW} height={svgGuageH}>
        <g>
          <rect width={svgW} height={svgH} fill="black" />
          <rect width={(props.hour)*20} height={svgH} fill="blue" />
        </g>
        <text y="16" fill="white">Hour: {props.hour}</text>
      </svg>
      </div>
    </div>
  )
}