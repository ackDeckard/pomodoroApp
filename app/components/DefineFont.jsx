import React from "react";

function DefineFont({ cosmeticProps }) {
  return (
    <article className="mx-6 mb-5 bg-white  ">
      <div className="mb-4 h-[1px] w-full bg-gray-400/50 lg:my-8"></div>

      <div
        className={`grid gap-4 lg:grid-flow-col lg:place-items-center lg:justify-between `}
      >
        <div className="text-center text-xs font-bold uppercase">
          <span className="text-[11px] uppercase tracking-[0.2em]">Font</span>
        </div>
        <div className="grid grid-flow-col justify-center gap-4">
          {cosmeticProps.fonts.map((item, id) => (
            <div
              key={id}
              className={`grid h-10 w-10 place-items-center rounded-full bg-clockAndTitle text-navBarBG hover:cursor-pointer hover:bg-black hover:text-white ${
                item + "." + "className"
              } ${
                cosmeticProps.selectedFont === item &&
                "bg-customBackground text-white"
              } `}
              onClick={() => cosmeticProps.setSelectedFont(item)}
            >
              Aa
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default DefineFont;
