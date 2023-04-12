import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

export default function Home() {
    const zsessionNames = [ 
    'Dawn', 
    'Gather', 
    'Noon', 
    'Wane', 
    'Close', 
    'Set', 
    'Evening', 
    'Night', 
    'Midnight', 
    'Dead',
    '~zen~', 
  ];
  
  const habitNames = {
    1: 'Struggles',
    2: 'Flowers',
    3: 'Elders',
    4: 'Memorial',
    5: 'Freedom',
    6: 'Harvest',
    7: 'Hallows',
    8: 'Feast',
    9: 'Newzen'
  };
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter habitNames={habitNames} zsessionNames={zsessionNames} />
        </div>
      </main>
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
        </div>
      </footer>
    </Router>
  );
}
