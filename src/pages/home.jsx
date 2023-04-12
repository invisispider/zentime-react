import * as React from "react";
import ZenTick from '../components/zen-tick';
import SessionsChart from '../components/sessions-chart';
import Conversions from '../components/conversions';
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import { useState } from "react";


export default function Home() {
  
  // THESE GET THE VARIABLE FROM DayView //   
  const [zhour, setZhour] = useState('');
  const zsessToHome = (zhour) => {
    setZhour(zhour);
  }
  const zsessionNames = [ 
    {id:1, name: 'Dawn'},
    {id:2, name: 'Breakfast'},
    {id:3, name: 'Morning'},
    {id:4, name: 'Lunch'},
    {id:5, name: 'Afternoon'},
    {id:6, name: 'Dinner'},
    {id:7, name: 'Evening'},
    {id:8, name: 'Night'},
    {id:9, name: 'Midnight'},
    {id:10, name: 'Dead'},
    {id:0, name: '~zen~'}
  ];
  
    const habitNames = [
    {id: 1, name: 'Struggles'},
    {id: 2, name: 'Flowers'},
    {id: 3, name: 'Elders'},
    {id: 4, name: 'Memorial'},
    {id: 5, name: 'Freedom'},
    {id: 6, name: 'Harvest'},
    {id: 7, name: 'Hallows'},
    {id: 8, name: 'Feast'},
    {id: 0, name: 'Newzen'}
  ];
  
  const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
  
  return (
    <div className="container">

      <SessionsChart zhour={zhour} zsessionNames={zsessionNames} />
      <animated.h1 onMouseEnter={trigger} className="title" style={style}>
       zenCalendar
      </animated.h1>

      <h2 className="title">by SteinUnlimited</h2>
      <h3 style={{margin: '0em 20em 0em 0.7em', justifyText: 'center'}}>
        A free open-source, lightweight time-keeping solution which replaces 
        deprecated aspects of the Roman Gregorian calendar while retaining
        compatibility and core functionality. 
      </h3>

      <ZenTick zsessToHome={zsessToHome} zsessionNames={zsessionNames} />
      <Conversions />
    </div>
  );
}