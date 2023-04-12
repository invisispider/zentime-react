import * as React from "react";

import Conversions from '../components/conversions';
import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";


export default function About(props) {
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
  
  // const habitInsert = habitNames.map((grabo) => { 
  //    <div key={0}>{'pizza'}</div>
  // });
  
  
  return (
    <div className="page">
      <div className='row'>        
        <Conversions />
        <animated.h1 onMouseEnter={trigger} className="title" style={style}>
         zenCalendar
        </animated.h1>
        <div className='col'>
          <span>
            Let me ask you something...
          </span>
          <ul>
            <li>What were you doing on the first of last month?</li>
            <li>How many days are there in March?</li>
            <li>"In a month" is same date next month or 30 days from now?</li>
            <li>How many centuries between Great pyramids and Fall of Rome?</li>
            <li>How many seconds into the day are we right now?</li>
            <li>How much leisure time do you have each day?</li>
            <li>How would one schedule a life to maximize health and joy?</li>
          </ul>
          <span>What if time is easier than this? </span>
          <span style={{fontSize: 'large', color: 'darkOrchid'}}>
            Down to basics: some elements will be retained. Natural phenonema which are consistent, such as the turning of the planet and its orbit around the sun, will be tracked better with zen. Milliseconds and thus seconds are retained for machine compatibility. Things which make no sense, like arbitrary season names and year zero at the birth of Christianity, are deprecated. A calendar is a tool used to clarify events manifested in time, and is thus nonreligious. The zen name refers to focus, clarity, and simplicity. Our calendar is devoid of assumptions, empty of value, and free to fill with your reality.
          </span>
          <span style={{fontSize: 'large', color: 'darkOrchid'}}>
              Time increments conform to the way human beings natively comprehend numbers and communicate about events. Sessions are longer than hours, weeks are shorter, sub-units are divided into base-10 and base-8 systems compatible with human fingers and byte code.
          </span>
           <ul style={{fontSize: '1.2em', color: 'springGreen'}}>
            <li>Ever say, "Be there in a minute?" and actually mean more than a minute?</li>
            <li>You were having a Moment.</li>
            <li>An Instant lasts a second, but a Moment is 80 Instants, not 60.</li>
            <li>A Moment is how long it takes to floss your teeth.</li>
            <li>Notice how we tend to "chunk" our behavior into 10-15 minute periods?</li>
            <li>So what if a While was a specific unit of time in that range?</li>
            <li>A While is a chat, a quick walk or a meal.</li>
            <li>A child has been in the bathroom a While, you might go check on them.</li>
            <li>10 Moments in a While and 10 Whiles in a Session.</li>
            <li>Sounds confusing? Just think, is it easier to divide by 60, 24, or 10?</li>
            <li>Session, Moment, and While can be specified as a decimal.</li>
            <li>That means Sessions work like money and percentages.</li>
            <li>Session decimal 3.12 ("Morning twelve") expresses Session, Moment, and While.</li>
            <li>Add `Instants for a complete zenTime: 4.12`78</li>
            <li>Because they are literally ticks.</li>
            <li>a zenTime references a specific Session, While, Moment, and Instant of day.</li>
            <li>These unfamiliar units are unfamiliar for a reason.</li>
            <li>Decimal-based Sessions means they can be thought of like dollars or percentages.</li>
            <li>$1.11 = 1.11% = 1`11 = Session 1 While 1 Moment 1.</li>
            <li>That was my lunch break.</li>
            <li>A Session is how long it takes to watch a movie.</li>
            <li>A Session is practicing a hobby, doing some chores, attending an event.</li>
            <li>Full time work is 4 Sessions. Good sleep is 4 Sessions.</li>
            <li>Thus, you have 2.8 Sessions left to find your way out.</li>
          </ul>
          <span>If you are struggling, please recall how long it took to learn to read a clock. You should be fluent in zen within a few hours.</span>
          <span style={{fontSize: 'large', color: 'darkOrchid'}}>  
            While years are still conceptualized as a circular cycle of seasons (as 360 of the 365+ days will create a circle), no other units of time are conceptualized on a circle mimmicking cosmic orbits. Time is seen as a movement forward, a pregression of habits, a journey which rises like a spiral (or a planetary orbit given the solar orbit of the galaxy) through the yearly cycle compatible with modern and post-modern philosophies. It may surprise you how much time is saved rethinking time.
          </span>

        </div>

        <div className='col'>
          <span style={{fontSize: 'large', color: 'darkOrchid'}}>
            There are 8 Habits a year which divide seasons in half. Each Habit includes exactly nine 5-day Cycles, or exactly 45 days. Default holiday on first shares name with Habit. 
          </span>
         
          <span>
              Instants, Moments, Whiles, and Sessions are exactly what they sound like. Each session is named how you'd refer to it naturally. 
          </span>
          <span>
              Rotating minutes and hours based on the deprecated tradition of the sun dial promote the sense of being a turning gear, a mechanical part, a bronze age peasant.  
          </span>
          <span>
            The responsibility of tracking and managing time falls on we the users. This is why zenCalendar is open-source and universally compatible, and forking/rebranding is encouraged. It can be modified to fit any  culture or lifestyle, and any week- or moment-length desired. That is why it is better; because you are allowed to change it. Be advised: the default calendar used by humanity since "0 AD" has resulted in our current state. 
          </span>
          <span>
            The cycles of the moon and the sun's travel through the Zodiac are not properly tracked with months. When astrology was created, the sun signs were different. but do it accurately and logically, then the "moon" and "stars" plug-ins can help you to chart astrological and mythological phenomena more accurately and more fundamentally (on a day-to-day, present-awareness level) than the existing system.
          </span>
          <span>
            The obvious truth of the matter is, if we want "months" to track the moon, our Habits should be set exactly to the moon cycles. If we want to "months" to track astronomy based on astrology, then our Habits (months) should begin and end exactly at those Zodiac sign entry and exit points, and the Habits should simply be named the Zodiac signs. This is the fundamental logic of zenCalendar; we minify the time-keeping code and expand functionality  (awareness of time, ease of scheduling, healthy lifestyle, energetic culture.)
          </span>
        </div>
      </div>
      <table style={{backgroundColor: 'black', color: 'lavender', border: '3px solid lightblue', fontSize: '1.2rem', width: '60vw', margin: '1em auto'}}>
        <thead>
          <tr>
            {habitNames.map(habit=><th key={habit.id+'B'}>{habit.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {habitNames.map(habit=>habit.id<9 ? <th key={habit.id+'A'}>{habit.id}</th> : <th></th>)}
          </tr>
          <tr><th style={{fontSize: '1.6em', padding: '.2em', borderTop: '1px solid #0FA'}} colSpan={9}>Habits</th></tr>
        </tbody>
      </table>

      <table style={{backgroundColor: 'black', color: 'lavender', border: '3px solid lightblue', fontSize: '1.2rem', width: '60vw', margin: '1em auto'}}>
        <thead>
          <tr>
            {zsessionNames.map(session=><th key={session.id+'D'}>{session.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {zsessionNames.map(session=><th key={session.id+'C'}>{session.id}</th>)}
          </tr>
          <tr>
            <th style={{fontSize: '1.6em', padding: '.2em', borderTop: '1px solid #0FA'}} colSpan={11}>Sessions</th>
          </tr>
        </tbody>
      </table>


      <h2 style={{textAlign: 'center'}}>We Create the Future ~ Stein Unlimited</h2>
    </div>
    
  );
}
      
        
     
