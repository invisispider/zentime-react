import * as React from "react";
import { useState, useEffect } from "react";

const ZenTime = props => {

  const [zWhile, setzWhile] = useState(null);
  const [zMoment, setZmoment] = useState(null);
  const [zName, setzName] = useState({id: '', name: ''});
  
  const z = props.z;
  
  const svgW = 480;
  const svgH = 1100;
  const svgGuageH = 20;
    
  return (
    <div style={{ float: "left", margin: "15px" }}>
      <h2>zenTime</h2>
      <h3>
        {props.zsessionNames.filter(all=>all.id==1+props.zsession).map(s=>s.name)+' '}
        {props.zsession+1}
        {"."}
        {props.zmoment}
        {"`"}
        {props.zinstant}{'  || H '}
        {Number(String(props.forma).slice(-4))+10000}
      </h3>
      <div>
        <svg width={svgW} height={svgGuageH}>
          <g>
            <rect width={svgW} height={svgGuageH} fill="black" />
            <rect width={(svgW/z.ins_in_mom)*props.zinstant} height={svgGuageH} fill="MediumPurple" />
          </g>
          <text y="16" fill="white">
            Instant: {props.zinstant}
          </text>
        </svg>
      </div>
      <div>
        <div>
          <svg width={svgW} height={svgGuageH}>                  
            <g>
              <rect 
                width={svgW} 
                height={svgGuageH} 
                fill="black" />
              <rect width={(svgW/100)*props.zmoment} height={svgGuageH} fill="MediumSeaGreen" />
              <rect 
                width={(svgW/10)*props.zwhile} 
                height={svgGuageH} fill="MediumPurple" />
            </g>
            <text y="16" fill="white">
              While & Moment: {props.zmoment}
            </text>
          </svg>
        </div>
        <div>
          <svg width={svgW} height={svgGuageH}>                  
            <g>
              <rect 
                width={svgW} 
                height={svgGuageH} 
                fill="black" />
              <rect 
                width={(svgW/10.8)*props.zsession} 
                height={svgGuageH} fill="MediumPurple" />
            </g>
            <text y="16" fill="white">
              Session: {Number(1+props.zsession)%11}
            </text>
          </svg>
        </div>
      </div>
   </div>
  );
};

export default ZenTime;
