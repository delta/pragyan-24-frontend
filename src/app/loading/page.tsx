'use client';

import off from '@/assets/images/off-button.svg';
import { useState, useEffect } from 'react';
import on from '@/assets/images/on-button.svg';
import press from '@/assets/images/press-button.svg'
import Image from 'next/image';

import './styles.css'

const loadingPage = () => {

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(true);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setButton1(prevButton1 => !prevButton1);
      setButton2(prevButton2 => !prevButton2);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    var button = document.getElementById('press');

    if (button?.className === 'press') {
      const inter = setInterval(() => {
        setCurrentTime(new Date());
      }, 800);

      return () => clearInterval(inter);
    } 

  }, [])

  const formatTime = (time: number): string => {
    return time < 10 ? '0' + time : time.toString();
  };

  const getRandomDate = () => {
    const year = Math.floor(Math.random() * 100) + 1900;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return new Date(year, month, day, hours, minutes);
  };

  const endPoint = () => {
    var month = document.getElementById('m-text')
    var date = document.getElementById('d-text')
    var year = document.getElementById('y-text')
    var hours = document.getElementById('h-text')
    var minutes = document.getElementById('mi-text')
    var ready = document.getElementById('ready-text')

    month!.innerHTML = '---'
    date!.innerHTML = '--'
    year!.innerHTML = '----'
    hours!.innerHTML = '--'
    minutes!.innerHTML = '--'

    ready!.innerHTML = '????? ?? ?????? ?'
  }

  const handlePress = () => {
    var button = document.getElementById('press');
    if (button?.className === 'press') button.className = 'press-after'

    const intp = setInterval(() => {
      setCurrentTime(getRandomDate());
    }, 500);

    setTimeout(() => {
      clearInterval(intp);
      endPoint()
    }, 10000);

  }

  return (
    <>
      <div className="fake-body">

        <div className="middle-portion">

          <div className="top-row">
            <div className="present-time">
              <div className="present-text">
                PRESENT TIME
              </div>
            </div>
            <div className="blink-buttons">
              <div className="on-button">
                <Image src={button1 ? on : off} alt="Button 1" />
              </div>
              <div className="off-button">
                <Image src={button2 ? on : off} alt="Button 2" />
              </div>
            </div>
          </div>




          <div className="middle-row">
            <div className="mdy-text">
              <div className="month-div">
                <div id = 'm-text' className="m-text">{currentTime.toLocaleString('default', { month: 'short' }).toUpperCase()}</div>
                <div className="m-bg-text">888</div>
              </div>
              <div className="date-div">
                <div id = 'd-text' className="d-text">{formatTime(currentTime.getDate())}</div>
                <div className="d-bg-text">88</div>
              </div>
              <div className="year-div">
                <div id = 'y-text' className="y-text">{currentTime.getFullYear()}</div>
                <div className="y-bg-text">8888</div>
              </div>
            </div>
            <div className="time-text">
              <div className="hours-div">
                <div id = 'h-text' className="h-text">{formatTime(currentTime.getHours())}</div>
                <div className="h-bg-text">88</div>
              </div>
              <div className="colon-div">
                <div className="colon-text">:</div>
              </div>
              <div className="min-div">
                <div id = 'mi-text' className="mi-text">{formatTime(currentTime.getMinutes())}</div>
                <div className="mi-bg-text">88</div>
              </div>
            </div>
          </div>





          <div className="bottom-row">
            <div className="ready-to">
              <div id = 'ready-text' className="ready-text">
                READY TO TRAVEL ?
              </div>
            </div>
            <div className="press-button">
              <button id='press' className='press' onClick={handlePress}>
                <Image src={press} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loadingPage;