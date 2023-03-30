import React from "react";

function DefineTime({ timerProps }) {
  const data = [
    {
      id: 1,
      title: "pomodoro",
    },
    {
      id: 2,
      title: "short break",
    },
    {
      id: 3,
      title: "long break",
    },
  ];

  const handlePomodoroChange = (e) => {
    timerProps.setPomotime(e.target.value);
  };

  const handleShortTimeChange = (e) => {
    timerProps.setShortime(e.target.value);
  };

  const handleLongTimeChange = (e) => {
    timerProps.setLongtime(e.target.value);
  };

  return (
    <article className="mx-6 mt-4 mb-5 bg-white">
      <div className="mb-4 text-center text-xs font-bold uppercase">
        <span className="text-[11px] tracking-[0.2em]">time (minutes) </span>
      </div>

      <div className="lg:grid lg:grid-flow-col">
        {data.map((item) => {
          let handleChange;
          let currentvalue;

          switch (item.title) {
            case "pomodoro":
              handleChange = handlePomodoroChange;
              currentvalue = timerProps.pomotime;
              break;
            case "short break":
              handleChange = handleShortTimeChange;
              currentvalue = timerProps.shorttime;
              break;
            case "long break":
              handleChange = handleLongTimeChange;
              currentvalue = timerProps.longtime;
              break;
            default:
              handleChange = () => {};
          }
          return (
            <div
              key={item.id}
              className="grid w-full grid-flow-col place-items-center justify-between lg:grid-flow-row"
            >
              <label
                htmlFor={item.title}
                className="mb-2 mr-auto text-xs font-bold text-inputColor/40 lg:text-left"
              >
                {item.title}
              </label>
              <input
                type="number"
                id={item.title}
                value={currentvalue}
                className="mb-2 h-10 w-36 rounded-lg bg-inputBg pl-4 font-bold text-inputColor"
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default DefineTime;
