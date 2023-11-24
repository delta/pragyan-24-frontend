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

  useEffect(() => {
    const interval = setInterval(() => {
      setButton1(prevButton1 => !prevButton1);
      setButton2(prevButton2 => !prevButton2);
    }, 800);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

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
                <div className="m-text">
                  NOV
                </div>
                <div className="m-bg-text">
                  888
                </div>
              </div>
              <div className="date-div">
                <div className="d-text">
                  20
                </div>
                <div className="d-bg-text">
                  88
                </div>
              </div>
              <div className="year-div">
                <div className="y-text">
                  2023
                </div>
                <div className="y-bg-text">
                  8888
                </div>
              </div>
            </div>
            <div className="time-text">
              <div className="hours-div">
                <div className="h-text">
                  23
                </div>
                <div className="h-bg-text">
                  88
                </div>
              </div>
              <div className="colon-div">
                <div className="colon-text">
                  :
                </div>
              </div>
              <div className="min-div">
                <div className="mi-text">
                  45
                </div>
                <div className="mi-bg-text">
                  88
                </div>
              </div>
            </div>
          </div>





          <div className="bottom-row">
            <div className="ready-to">
              <div className="ready-text">
                READY TO TRAVEL ?
              </div>
            </div>
            <div className="press-button">
              <button className='press'>
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