"use client";

import { useState, useRef, useEffect } from "react";

interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

export default function BillingToggle({
  isYearly,
  setIsYearly,
}: BillingToggleProps) {
  const yearlyButtonRef = useRef<HTMLButtonElement>(null);
  const monthlyButtonRef = useRef<HTMLButtonElement>(null);
  const toggleContainerRef = useRef<HTMLDivElement>(null);

  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    left: 0,
    height: 0,
    top: 0,
  });

  const mounted = useRef(false);

  useEffect(() => {
    const updateSliderPosition = () => {
      let targetButton = null;
      if (isYearly) {
        targetButton = yearlyButtonRef.current;
      } else {
        targetButton = monthlyButtonRef.current;
      }

      if (targetButton && toggleContainerRef.current) {
        const buttonRect = targetButton.getBoundingClientRect();
        const containerRect =
          toggleContainerRef.current.getBoundingClientRect();
        setSliderStyle({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
          height: buttonRect.height,
          top: buttonRect.top - containerRect.top,
        });
      }
    };

    updateSliderPosition();

    if (!mounted.current) {
      mounted.current = true;
    }

    window.addEventListener("resize", updateSliderPosition);

    return () => {
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, [isYearly]);

  return (
    <div
      ref={toggleContainerRef}
      className="inline-flex text-sm font-semibold p-0.5 rounded-full cursor-pointer text-[#b5b5b5] bg-[#111113] relative border border-[#212123]"
    >
      {/* Sliding background */}
      <div
        className={`absolute rounded-full bg-[#313235] border border-[#212123] ${
          mounted.current ? "transition-all duration-300 ease-out" : ""
        }`}
        style={{
          width: sliderStyle.width,
          left: sliderStyle.left,
          height: sliderStyle.height,
          top: sliderStyle.top,
        }}
      />
      <button
        type="button"
        ref={yearlyButtonRef}
        className={`relative z-10 flex-1 py-1.5 px-3 rounded-full flex items-center justify-center whitespace-nowrap border border-transparent transition-all duration-300  cursor-pointer text-sm ${
          isYearly ? "text-white" : ""
        }`}
        onClick={() => setIsYearly(true)}
      >
        <span className="relative z-10 transition-all duration-200">
          Pay yearly
          <span
            className={`text-[12px] ms-1 ${isYearly ? "text-[#db8557]" : ""}`}
          >
            save 16%
          </span>
        </span>
      </button>
      <button
        type="button"
        ref={monthlyButtonRef}
        className={`relative z-10 flex-1 py-1.5 px-3 rounded-full flex items-center justify-center whitespace-nowrap border border-transparent transition-all duration-300  cursor-pointer text-sm ${
          !isYearly ? "text-white" : ""
        }`}
        onClick={() => setIsYearly(false)}
      >
        <span className="relative z-10">Pay monthly</span>
      </button>
    </div>
  );
}
