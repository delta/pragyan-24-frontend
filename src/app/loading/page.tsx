'use client';

import off from '@/assets/images/off-button.svg';
import { useState, useEffect } from 'react';
import on from '@/assets/images/on-button.svg';
import press from '@/assets/images/press-button.svg'
import green from '@/assets/images/press-green.svg'
import Image from 'next/image';

import './styles.css'

const loadingPage = () => {

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonClicked1, setButtonClicked1] = useState(false);
  const [buttonClicked2, setButtonClicked2] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [intervalDuration, setIntervalDuration] = useState(1000);
  const [year, setYear] = useState(String(new Date().getFullYear()).padStart(4, '0'));
  const [month, setMonth] = useState(new Date().toLocaleString('default', { month: 'short' }));
  const [date, setDate] = useState(String(new Date().getDate()).padStart(2, '0'));
  const [hours, setHours] = useState(String(new Date().getHours()).padStart(2, '0'));
  const [minutes, setMinutes] = useState(String(new Date().getMinutes()).padStart(2, '0'));

  useEffect(() => {
    if (!buttonClicked2) {
      const timer = setInterval(() => {
        setYear(String(new Date().getFullYear()).padStart(4, '0'));
        setMonth(new Date().toLocaleString('default', { month: 'short' }));
        setDate(String(new Date().getDate()).padStart(2, '0'));
        setHours(String(new Date().getHours()).padStart(2, '0'));
        setMinutes(String(new Date().getMinutes()).padStart(2, '0'));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [buttonClicked2]);

  const generateRandomCharacters = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const generateRandomNumber = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10).toString();
    }
    return result;
  }

  useEffect(() => {
    if (buttonClicked && !intervalId) {
      const id = setInterval(() => {
        setButton1(prevButton1 => !prevButton1);
        setButton2(prevButton2 => !prevButton2);
      }, intervalDuration);
      setIntervalId(id);

      const timer = setInterval(() => {
        setYear(generateRandomNumber(4));
        setMonth(generateRandomCharacters(3));
        setDate(generateRandomNumber(2));
        setHours(generateRandomNumber(2));
        setMinutes(generateRandomNumber(2));
      }, 50);

      setIntervalId(timer);

      setTimeout(() => {
        setButtonClicked(false);
        clearInterval(id);
        clearInterval(timer);
        setIntervalId(null);
        setYear("----");
        setMonth("---");
        setDate("--");
        setHours("--");
        setMinutes("--");
        var ready = document.getElementById('ready-text')
        ready!.innerHTML = '?????? ?????? ??????'
      }, 1690);
    } else if (!buttonClicked && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [buttonClicked, intervalId]);


  const handlePress = () => {

    setButtonClicked(true);
    setButtonClicked1(true);
    setButtonClicked2(true);
    var button = document.getElementById('press');
    if (button?.className === 'press') button.className = 'after'
    setIntervalDuration(prevDuration => prevDuration / 4);

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
                <Image src={button1 ? off : on} alt="Button 1" suppressHydrationWarning />
              </div>
              <div className="off-button">
                <Image src={button2 ? off : on} alt="Button 2" suppressHydrationWarning />
              </div>
            </div>
          </div>




          <div className="middle-row">
            <div className="mdy-text">
              <div className="month-div">
                <div id='m-text' className="m-text">{month}</div>
                <div className="m-bg-text">888</div>
              </div>
              <div className="date-div">
                <div id='d-text' className="d-text">{date}</div>
                <div className="d-bg-text">88</div>
              </div>
              <div className="year-div">
                <div id='y-text' className="y-text">{year}</div>
                <div className="y-bg-text">8888</div>
              </div>
            </div>
            <div className="time-text">
              <div className="hours-div">
                <div id='h-text' className="h-text">{hours}</div>
                <div className="h-bg-text">88</div>
              </div>
              <div className="colon-div">
                <div className="colon-text">:</div>
              </div>
              <div className="min-div">
                <div id='mi-text' className="mi-text">{minutes}</div>
                <div className="mi-bg-text">88</div>
              </div>
            </div>
          </div>





          <div className="bottom-row">
            <div className="ready-to">
              <div id='ready-text' className="ready-text">
                READY TO TRAVEL ?
              </div>
            </div>
            <div className="press-button">
              <button id='press' className={buttonClicked1 ? 'after' : 'press'} onClick={handlePress} >
                <Image src={buttonClicked1 ? press : green} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loadingPage;