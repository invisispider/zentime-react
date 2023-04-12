import * as React from 'react';


export default function Conversions() {
  
  return (
    <div className='conversionTable'>
      <div className='row'>
        <table style={{backgroundColor: 'black', color: 'lavender', border: '3px solid lightblue', fontSize: '1.2rem'}}>
          <thead>
            <tr><th colSpan='4'>zenTime</th></tr>
          </thead>
          <tbody>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>10.8 Sessions</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Day</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>1080 Moments</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Day</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>100 Moments</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Session</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>10 Moments</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>While</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>80 Instants</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Moment</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>10 Whiles</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Session</th>
            </tr>       
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>800 Instants</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>While</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>108 Whiles</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Day</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>8000 Instants</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Session</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>8 Whiles</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>zen</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid lightskyblue'}}>1 Instant</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid lightskyblue'}}>Second</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>86400 Instants</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>zen</th>
            </tr>
          </tbody>
        </table>

        <table style={{backgroundColor: 'black', color: 'lavender', border: '3px solid lightblue', fontSize: '1.2rem'}}>
          <thead>
            <tr><th colSpan='4'>zenDate</th></tr>
          </thead>
          <tbody>
          <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>12,021ya</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Historical Era</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>45 Days</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Habit</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>8 Habits</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Year</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>5 Days</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Cycle</th>
            </tr>
            <tr>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid lightskyblue'}}>360 Days</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid lightskyblue'}}>Year</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>5-6 days</th>
              <th style={{padding: '0.2rem 0.7rem', border: '1px solid darkmagenta'}}>Newzen</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )  
}
