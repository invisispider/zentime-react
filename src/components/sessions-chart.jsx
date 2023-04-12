import * as React from "react";
import { useState, useEffect } from "react";
// #0FA steingreen #4FA steinlightgreen


const SessionsChart = ({zhour, zsessionNames}) => {
  const [zView, setzView] = useState(false);
  
  const svgHeight = 900;
  const svgWidth = 300;

  const rSpread = svgHeight/24;
  const zSpread = svgHeight/10.8;
  const zenSpread = svgHeight/13.5;
  
  const changeView = e => {
    e.preventDefault();
    setzView(!zView);
    alert(zView);
  }

  
  let rHours = [];
  for(let i=0; i<25; i++) {
    if(i<5 || i>16){
      rHours.push(
        <rect key={''+i+'a'} y={rSpread*i} 
          stroke='#D0FFF1' fill='darkBlue' 
          width={svgWidth/2} height={svgHeight/24} />);
      
    } else {      
    rHours.push(
      <rect key={''+i+'b'} y={rSpread*i} 
        stroke='#D0FFF1' fill='blue' 
        width={svgWidth/2} height={svgHeight/24} />);
    }
    rHours.push(
      <text key={''+i+'c'}
        x={svgWidth/100} 
        y={i*rSpread-(-0.15*rSpread)} 
        fill="white">{((48-i+5))%24}</text>
    );
  };
  let hou_in_sess = 24/10.8;
  
  // THIS VARIABLE CAUGHT ME UP QUITE A HOT MINUTE
  let hou_of_day = zhour<=5 ? zhour+19 : ((zhour-5)%24);
  let hou_height = svgHeight-((svgHeight/24)*hou_of_day);
  let sess = hou_of_day/hou_in_sess;
  
  // GENERATE ZEN SIDE OF SVG
  let zS = [];
  for(let i=0; i<11; i++) {
    for(let j=0; j<11; j++) {
      zS.push(
        <rect key={i+''+j+'w'}
          x={svgWidth/2} 
          y={(svgHeight/10.8*i+(svgHeight/108*j))} 
          stroke='#715' 
          fill='DarkViolet' 
          width={svgWidth/2} 
          height={(svgHeight/108)} 
          />
      );
    }
    if (i==0){
      zS.push(
        <rect key={''+i+'d'}
          x={svgWidth/2} 
          y={zSpread*i} 
          stroke='#D0FFF1' 
          fill={'rgb(10, 30, 10, 50%)'}
          width={svgWidth/2} 
          height={zenSpread} 
          />
      );
      zS.push(
        <text key={''+i+'e'}
          x={svgWidth/1.6} 
          y={0.8*zenSpread} 
          fill="#4FA">
          {zsessionNames.filter(name=>name.id==0).map(item=>item.name)}
        </text>
      );
    } else {
      zS.push(
        <rect key={''+i+'f'}
          x={svgWidth/2} 
          y={(zenSpread+(zSpread*i)-zSpread)} 
          stroke='#D0FFF1' fill='none' width={svgWidth/2} 
          height={zSpread} />);
      zS.push( 
        <text key={''+i+'j'} x={(svgWidth/1.6)} 
          y={i*zSpread+zSpread/1.5} 
          fill="#4FA">{zsessionNames.filter(name=>name.id==11-i).map(item=>item.name)}{" | "}{11-i}</text>
      );
    };
  };

  // GENERATE CLOCK HAND
  zS.push(
    <g key="snurf" fill="none">
      <line x1="0" y1={hou_height} x2={svgWidth} y2={hou_height} style={{stroke: 'OrangeRed', strokeWidth: '0.2rem'}} />
      <circle onClick={changeView} cx={svgWidth/2} 
        cy={hou_height} 
        r="25" 
        stroke="MintCream" 
        strokeWidth="2" 
        fill="DarkOrchid" />
      <text fontSize="x-large" x={0.8*svgWidth} 
        y={hou_height} fill="white">
        {((sess+1))%11}
      </text>
      <text fontSize="x-large" x={rSpread} y={hou_height} fill="white">
        {Math.floor(Number(zhour))}
      </text>
    </g>
  ); 


  return (
    <div style={{textAlign: 'center', float: 'right', padding: '0.9em'}} >
      <button id="viewGuy" onClick={changeView}>Session of Day</button>
      {zView & <p>{'not'}</p>}
      <svg width={svgWidth} height={svgHeight}>
        <g fill="none">{rHours}</g>
        <g fill="none">{zS}</g>
      </svg>
    </div>   
  )
}


export default SessionsChart;