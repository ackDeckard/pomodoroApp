"use client";
import { cva, VariantProps } from "class-variance-authority";
import { useSound } from "use-sound";

const colorVariants = {
  redDetails: "bg-redDetails/40 text-redDetails shadow-lg",
  cyanDetails: "bg-cyanDetails/40 text-cyanDetails shadow-lg",
  pinkDetails: "bg-pinkDetails/40 text-pinkDetails shadow-lg",
};

const Button = ({
  children,
  className,
  intent,
  hovercolor,
  selectedColor,
  ...props
}) => {
  const [playActive] = useSound("/switchon.mp3");
  const [playInactive] = useSound("/switchoff.mp3");

  const buttonClasses = cva(
    [
      "grid",
      "h-full",
      "w-full",
      "place-items-center",
      "tracking-wide",
      "transition",
      "duration-300",
      "ease-in-out",
      "text-clockAndTitle/50",
      "text-xs",
      "capitalize",
      "md:text-xl",
      "shadow-inner",
    ],
    {
      variants: {
        intent: {
          startPomodoro: colorVariants[selectedColor],
          shortBreakPomodoro: [
            "bg-shortBreak/40",
            "text-shortBreak",
            "shadow-lg",
          ],
          longBreakPomodoro: ["text-longBreak", "bg-longBreak/40", "shadow-lg"],
        },
        hovercolor: {
          customBg: ["md:hover:bg-redDetails/20"],
          blueBg: ["md:hover:bg-shortBreak/20"],
          greenBg: ["md:hover:bg-longBreak/20"],
        },
      },
      defaultVariants: {
        intent: "f",
      },
    }
  );

  return (
    <button
      onMouseDown={playActive}
      className={buttonClasses({ intent, hovercolor, className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
