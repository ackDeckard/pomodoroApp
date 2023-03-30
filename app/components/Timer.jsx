"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Countdown, { CountdownApi, zeroPad } from "react-countdown";

function Timer({
  setPomodorobreak,
  pomodorobreak,
  count,
  times,
  setCount,
  autostart,
  selectedColor,
}) {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const controls = useAnimation();
  const countdownApiRef = useRef();
  const [date, setDate] = useState(Date.now() + times * 1000);

  const setRef = (countdown) => {
    if (countdown) {
      countdownApiRef.current = countdown.getApi();
    }
  };

  function handleCountdownComplete() {
    setReady(!ready);
  }

  // to define part of the circle color
  const getColor = () => {
    if (selectedColor === "redDetails") {
      return "#F87070";
    }

    if (selectedColor === "cyanDetails") {
      return "#70F3F8";
    }
    if (selectedColor === "pinkDetails") {
      return "#D881F8";
    }
    return "#00ff88";
  };

  // need to use useEffect because the API has to be called or else countdownApiRef.current.pause will be undefined
  useEffect(() => {
    if (clicked || autostart) {
      controls.start("visible");
      countdownApiRef.current.start();
    } else {
      controls.stop();
      countdownApiRef.current.pause();
    }
    if (!clicked && !autostart) {
      countdownApiRef.current.pause();
    }
  }, [clicked, autostart, controls]);

  useEffect(() => {
    const currentCount = count + 1;
    if (ready) {
      // The short and long breaks will run just once and defaults back to the regular timer
      if (pomodorobreak !== "pomodoro") {
        setPomodorobreak("pomodoro");
        return;
      } else {
        setCount((prev) => prev + 1);
      }
      if (currentCount < 4) {
        setPomodorobreak("short break");
      } else {
        setPomodorobreak("long break");
        setCount(0);
      }
    }
  }, [count, pomodorobreak, ready, setCount, setPomodorobreak]);

  const renderer = ({ minutes, seconds, completed }) => {
    console.log(count);
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  const circleVariants = {
    hidden: {
      opacity: 0.3,
      pathLength: 0,
      strokeDasharray: "100%, 100%",
      strokeDashoffset: "-100%",
    },
    visible: {
      opacity: 1,
      strokeDasharray: "100%, 100%",
      strokeDashoffset: "0%",
      pathLength: 1,
      transition: {
        duration: times,
      },
    },
  };

  return (
    <section className="relative mx-auto grid h-[300px] max-h-[410px] w-[300px] max-w-[410px] place-items-center rounded-full bg-gradient-to-b from-initialGradient to-finalGradient">
      <div className="grid h-[94%] w-[94%]  rounded-full bg-gradient-to-b from-navBarBG to-navBarBG/10 shadow-lg">
        <div className="pointer-events-none absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute m-auto h-[300px] w-[300px] overflow-visible"
          >
            <path
              d="M 50,10 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80"
              fill="none"
              className="h-[90%] w-[90%] stroke-white/5 stroke-1"
            />
          </svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="m-auto h-[300px] w-[300px] overflow-visible"
          >
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0088ff" />
              <stop offset="100%" stopColor={getColor()} />
            </linearGradient>
            <motion.path
              variants={circleVariants}
              initial="hidden"
              animate={controls}
              d="M 50,10 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80"
              fill="none"
              className="h-[90%] w-[90%] stroke-2 "
              //stroke-linecap="round"
              stroke="url(#path-gradient)"
            />
          </motion.svg>
        </div>
        <div className="mt-8 grid  place-items-center rounded-full text-7xl text-black">
          <div className="self-end font-bold text-clockAndTitle">
            <Countdown
              key={date}
              ref={setRef}
              date={date}
              autoStart={autostart}
              renderer={renderer}
              onComplete={handleCountdownComplete}
            />
          </div>

          <button
            className="mb-5 text-xl text-clockAndTitle
          "
            onClick={() => setClicked(!clicked)}
          >
            {clicked || autostart ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Timer;
