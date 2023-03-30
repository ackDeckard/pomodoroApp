"use client";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import { BsGearFill } from "react-icons/bs";

const kumbh = Kumbh_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto_Slab({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const space = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const fonts = [space, roboto, kumbh];
const colors = ["redDetails", "cyanDetails", "pinkDetails"];

export default function Home() {
  const [pomodorobreak, setPomodorobreak] = useState("pomodoro");
  const [count, setCount] = useState(0);
  const [pomotime, setPomotime] = useState(10);
  const [shorttime, setShortime] = useState(5);
  const [longtime, setLongtime] = useState(15);
  const [autostart, setAutostart] = useState(false);
  const [openconf, setOpenconf] = useState(false);
  const [selectedFont, setSelectedFont] = useState(roboto);
  const [selectedColor, setSelectedColor] = useState("redDetails");

  const cosmeticProps = {
    selectedFont,
    setSelectedFont,
    selectedColor,
    setSelectedColor,
    fonts,
    colors,
  };

  const timerProps = {
    pomotime,
    shorttime,
    longtime,
    setPomotime,
    setShortime,
    setLongtime,
  };

  return (
    <main
      className={`mx-auto grid w-full place-items-center ${selectedFont.className}`}
    >
      <section className="glass max-w-xl rounded-xl border border-gray-800/50 bg-customBackground px-4 shadow-xl lg:w-full ">
        <NavBar
          pomodorobreak={pomodorobreak}
          setPomodorobreak={setPomodorobreak}
          selectedColor={selectedColor}
        />
        {/* header */}
        <section>
          {pomodorobreak == "pomodoro" ? (
            <Timer
              key={pomotime}
              setPomodorobreak={setPomodorobreak}
              pomodorobreak={pomodorobreak}
              times={pomotime}
              count={count}
              setCount={setCount}
              autostart={autostart}
              selectedColor={selectedColor}
            />
          ) : (
            ""
          )}
          {pomodorobreak == "short break" ? (
            <Timer
              key={2}
              setPomodorobreak={setPomodorobreak}
              pomodorobreak={pomodorobreak}
              count={count}
              times={shorttime}
              autostart={autostart}
            />
          ) : (
            ""
          )}
          {pomodorobreak == "long break" ? (
            <Timer
              key={3}
              setPomodorobreak={setPomodorobreak}
              pomodorobreak={pomodorobreak}
              count={count}
              times={longtime}
              autostart={autostart}
            />
          ) : (
            ""
          )}
        </section>
        <footer className="my-4 grid place-items-center lg:mt-20">
          <button
            className=" text-slate-600"
            onClick={() => setOpenconf(!openconf)}
          >
            <BsGearFill size={28} />
          </button>
          <div>
            <label className="text-xs">
              Autostart?
              <input
                type="checkbox"
                checked={autostart}
                onChange={() => setAutostart(!autostart)}
                className="form-checkbox ml-2 bg-red-700 text-black accent-pink-500"
              />
            </label>
          </div>
        </footer>
      </section>
      {openconf ? (
        <div className="absolute top-[50%] left-1/2 z-40 h-[550px] w-[330px]  -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white lg:top-[50%] lg:h-[450px] lg:w-[540px]">
          <Settings
            timerProps={timerProps}
            cosmeticProps={cosmeticProps}
            openconf={openconf}
            setOpenconf={setOpenconf}
          />
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
