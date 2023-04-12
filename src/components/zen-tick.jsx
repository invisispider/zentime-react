import * as React from "react";
import ZenTime from '../components/zen-time';
import GregTime from '../components/greg-time';
import { useState, useEffect } from "react";
import { DateTime } from 'luxon';


const ZenTick = (props) => {
  const z = {
    ins_in_mom: 80,
    mom_in_whi: 10,
    mom_in_sess: 100,
    whi_in_sess: 10,
    sess_in_day: 10.8,
    sess_in_hou: 0.45,
    ins_in_whi: 800,
    ins_in_sess: 8000
  };
  

  const [second, setSecond] = useState(null);
  const [minute, setMinute] = useState(null);
  const [hour, setHour] = useState(null);
  const [zinstant, setzInstant] = useState(null);
  const [zwhile, setzWhile] = useState(null);
  const [zmoment, setzMoment] = useState(null);
  const [zhour, setzHour] = useState(null);
  const [forma, setForma] = useState(null);
  const [zsess, setzSess] = useState(null);
  
  useEffect(() => {
    const timerID = setInterval(() => time_pulse(), 1000);  
    return () => {
      clearInterval(timerID);
    };
  }, []);
  
  const time_pulse = () => {
    let luxDate = DateTime.now().toLocal();
    let luxString = ''+luxDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET);
    let luxCalendar = ' ||  '+luxDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    setForma(luxString+''+luxCalendar);
    let sec = luxDate.second;
    let min = luxDate.minute;
    let hou = luxDate.hour;
    setSecond(luxDate.second);
    setMinute(luxDate.minute);
    setHour(luxDate.hour);
        
    let secs = luxDate.diff(luxDate.startOf('day'), 'seconds').as('seconds');
    setzInstant(Math.floor(secs%z.ins_in_mom));
    
    let display_zh = (24+(secs/3600))%24;
    let true_zh = (19+(secs/3600))%24;
    setzHour(display_zh);
    setzMoment(Math.floor(secs/z.ins_in_mom)%z.mom_in_sess);
    
    let whiles = Math.floor((secs/z.ins_in_whi)%z.mom_in_whi);
    setzWhile(whiles);
    
    const hou_in_sess = 24/10.8;
    let hou_of_day = zhour<=5 ? zhour+19 : ((zhour-5)%24);
    
    let sess = Math.floor(((hou_of_day/hou_in_sess))%11);
    setzSess(sess);
  };
  
  useEffect(() => {
    props.zsessToHome(zhour);
  }, [zhour]);



  return (
    <>
      <div>
        <h1 style={{color: 'LightYellow'}}>{'Implement Dates'}</h1>
        <GregTime second={second} minute={minute} hour={hour} forma={forma} />
      </div>
      <div>
        <ZenTime 
          zwhile={zwhile} zinstant={zinstant} zmoment={zmoment} 
          zhour={zhour} forma={forma} zsessionNames={props.zsessionNames} 
          zsession={zsess} z={z} />
      </div>
    </>
  )
}

export default ZenTick;
 