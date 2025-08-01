"use client";

import StarField from "@/components/star-field";

export default function AnimatedGradient() {
  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15),_transparent_70%)] blur-3xl opacity-70"></div>
      </div>

      <div
        className="absolute -inset-x-[600px] -top-12 flex h-[400px] grow overflow-hidden animate-slideDownFadeIn"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
        }}
      >
        <div className="absolute inset-0 flex opacity-[0.15] blur-lg">
          <div className="grow gradient-one"></div>
          <div className="grow gradient-two"></div>
        </div>

        <StarField paddingPercentage={0.1} />
        <style jsx>{`
          .gradient-one {
            background: conic-gradient(
              from 90deg at 35% -1%,
              rgb(255, 255, 255) 7.2deg,
              rgb(255, 255, 255) 14.4deg,
              rgba(10, 10, 10, 0) 36deg,
              rgba(10, 10, 10, 0) 342deg,
              rgb(255, 255, 255) 360deg
            );
          }
          .gradient-two {
            background: conic-gradient(
              from -90deg at 65% -1%,
              rgb(255, 255, 255) 0deg,
              rgba(10, 10, 10, 0) 18deg,
              rgba(10, 10, 10, 0) 324deg,
              rgb(255, 255, 255) 345.6deg,
              rgb(255, 255, 255) 352.8deg
            );
          }
        `}</style>
        {/* Custom animation styles */}
        <style jsx global>{`
          @keyframes slideDownFadeIn {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDownFadeIn {
            opacity: 0;
            transform: translateY(-100%);
            animation: slideDownFadeIn 1.5s ease-out 0.3s forwards;
          }
        `}</style>
      </div>
    </>
  );
}
