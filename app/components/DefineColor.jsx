import React from "react";

function DefineColor({ cosmeticProps }) {
  const colorVariants = {
    redDetails: "bg-redDetails",
    cyanDetails: "bg-cyanDetails",
    pinkDetails: "bg-pinkDetails",
  };

  return (
    <article className="mx-6 mt-2 bg-white">
      <div className="mb-4 h-[1px] w-full bg-gray-400/50 lg:my-8"></div>

      <div className="grid gap-4 lg:grid-flow-col lg:place-items-center lg:justify-between ">
        <div className="text-center text-xs font-bold uppercase">
          <span className="text-[11px] uppercase tracking-[0.2em]">Color</span>
        </div>
        <div className="grid grid-flow-col justify-center gap-4 ">
          {cosmeticProps.colors.map((item, id) => (
            <div
              key={id}
              className={`grid h-10 w-10 place-items-center rounded-full hover:cursor-pointer hover:text-white ${colorVariants[item]} `}
              onClick={() => cosmeticProps.setSelectedColor(item)}
            >
              {cosmeticProps.selectedColor === item && (
                <svg
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-4"
                >
                  <path
                    d="M1 5.5L4.95263 9.45263L13.4053 1"
                    stroke="#161932"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default DefineColor;
