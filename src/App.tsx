import { useEffect, useRef, useState } from 'react'
import avatar from './assets/avatar.png'
import VanillaTilt from 'vanilla-tilt';
import './App.scss'

function App() {
  const options = {
    scale: 1,
    speed: 1000,
    max: 5,
    glare: true,
    reverse: true,
    "max-glare": .5,
  };
  const tilt = useRef<any>(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return (
    <>
      <div className="ellipse-wrapper">
        <div className="ellipse-medium">
          &nbsp;
        </div>
        <div className="ellipse-big">
          &nbsp;
        </div>
      </div>
      <div className="main" ref={tilt}>
        <ul className="main-nav">
          <li className="main-nav__item  main-nav__item--active"><a href="" className="main-nav__link">Introduction</a></li>
          <li className="main-nav__item"><a href="" className="main-nav__link">My Portfolio</a> </li>
          <li className="main-nav__item"><a href="" className="main-nav__link">About Me</a> </li>
          <li className="main-nav__item"><a href="" className="main-nav__link">Contact Me</a> </li>
        </ul>
        <div className="main-content">
          <div className="main-content__avatar-wrapper">
            <div className="main-content__border">
            </div>
            <img src={avatar} className="main-content__avatar" alt="" />
          </div>
          <div className="main-content__text">
            <p className="paragraph">
              Hello, <br />
              This is <span className="paragraph--highline">Nam bui </span>
              Front-End dev &lt;Coder&gt;
            </p>
            <div className="wrap-button">
              <button className="btn">
              </button>
              <p className="wrap-button__text">See my Work</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
