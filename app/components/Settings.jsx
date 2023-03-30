import React from "react";
import { GrClose } from "react-icons/gr";
import DefineColor from "./DefineColor";
import DefineFont from "./DefineFont";
import DefineTime from "./DefineTime";

// since Tailwind doesn't like string concatenation, we need to provide the full class name.
const colorVariants = {
  redDetails: "bg-redDetails",
  cyanDetails: "bg-cyanDetails",
  pinkDetails: "bg-pinkDetails",
};

function Settings({ timerProps, cosmeticProps, openconf, setOpenconf }) {
  return (
    <section className="min-w-[330px] max-w-[550px]">
      <div className="mx-6 mt-4 mb-5 grid grid-flow-col items-center justify-between bg-white">
        <span className="text-xl font-bold">Settings</span>
        <div
          onClick={() => setOpenconf(!openconf)}
          className="hover:cursor-pointer"
        >
          <GrClose />
        </div>
      </div>
      <div className="mb-2 h-[1px] w-full bg-gray-400/50 lg:my-4"></div>

      <DefineTime timerProps={timerProps} />
      <DefineFont cosmeticProps={cosmeticProps} />
      <DefineColor cosmeticProps={cosmeticProps} />

      <button
        className={`absolute -bottom-7 left-1/2 h-14 w-36 -translate-x-1/2 rounded-full bg-black text-white ${
          colorVariants[cosmeticProps.selectedColor]
        } `}
        onClick={() => setOpenconf(!openconf)}
      >
        Close
      </button>
    </section>
  );
}

export default Settings;
