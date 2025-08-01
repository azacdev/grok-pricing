"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import FeatureItem from "@/components/featured-item";
import RollingNumber from "@/components/rolling-number";
import {
  BrainIcon,
  CircleCheckIcon,
  ClearBrainIcon,
  ClockIcon,
  CubeIcon,
  ElectricityIcon,
  FlaskIcon,
  LogoIcon,
  PictureIcon,
  VoiceIcon,
} from "@/components/icons";
import BillingToggle from "@/components/billing-toggle";
import AnimatedGradient from "@/components/animated-gradient";

export default function GrokPricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-[#161618] grid place-items-center gap-4 duration-200 w-[100vw] min-h-dvh overflow-x-hidden p-6">
      {/* Animated Gradient Container */}
      <AnimatedGradient />
      <div className="flex flex-col w-full items-center gap-10 h-full pt-20 relative z-10">
        {/* Header */}
        <header className="flex flex-col items-center gap-2">
          {/* SuperGrok Logo */}
          <div className="">
            <LogoIcon />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-center text-[#b7b7b7]">
              Introducing Grok 4
            </h3>
            <h3 className="text-lg -m-1 font-semibold text-[#939497]">
              The most powerful AI model
            </h3>
          </div>
        </header>
        {/* Billing Toggle */}
        <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />{" "}
        <div className="grid gap-4 w-full mx-auto place-items-center max-w-5xl grid-cols-1 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="max-w-96 flex-1 w-full p-6 rounded-3xl bg-[#1a1b1e] flex flex-col gap-6 shadow-sm z-[10] self-stretch border border-[#27282b]">
            <div>
              <div className="flex items-center w-full justify-between h-6">
                <h1 className="text-sm font-bold text-white">Basic</h1>
              </div>
              <h3 className="text-3xl font-bold text-white h-10">Free</h3>
            </div>
            <button
              className="w-full font-semibold text-sm rounded-full h-10 bg-transparent  text-[#A2A2A3] disabled:opacity-60 disabled:cursor-not-allowed border border-[#27282b]"
              disabled
            >
              Current Plan
            </button>
            <div className="flex flex-col gap-2">
              <FeatureItem
                icon={<CircleCheckIcon className="stroke-2" />}
                text="Limited access to Grok 3"
              />
              <FeatureItem
                icon={<BrainIcon className="stroke-2" />}
                text="Limited Context Memory"
              />
              <FeatureItem
                icon={<PictureIcon className="stroke-2" />}
                text="Aurora Image Model"
              />
              <FeatureItem
                icon={<CubeIcon className="stroke-2" />}
                text="Projects"
              />
              <FeatureItem
                icon={<ClockIcon className="stroke-2" />}
                text="Tasks"
              />
            </div>
          </div>
          {/* SuperGrok Plan */}
          <div className="max-w-96 flex-1 w-full p-6 rounded-3xl bg-[#1a1b1e] flex flex-col gap-6 shadow-sm z-[10] border-2 border-white self-stretch">
            <div>
              <div className="flex items-center w-full justify-between h-6">
                <h1 className="text-sm font-bold text-white">SuperGrok</h1>
                <div className="text-[12px] text-[#A2A2A3] font-semibold  px-1.5 py-0.5 rounded-lg bg-[#242628]">
                  Popular
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white h-10 space-x-1">
                <RollingNumber value={isYearly ? 300.0 : 30.0} />
                <span className="text-[#A2A2A3] text-sm">
                  {isYearly ? "/year" : "/month"}
                </span>
              </h3>
            </div>
            <button className="w-full font-semibold text-sm rounded-full h-10 bg-white text-black hover:bg-white/80 cursor-pointer">
              Upgrade to SuperGrok
            </button>
            <div className="flex flex-col gap-2">
              <FeatureItem
                icon={<CircleCheckIcon className="stroke-2 text-white" />}
                text="Increased access to Grok 4"
                subtitle="Replaces Grok 3 Think and DeepSearch"
                highlighted
              />
              <FeatureItem
                icon={<CircleCheckIcon className="stroke-2" />}
                text="Increased access to Grok 3"
              />
              <FeatureItem
                icon={<ClearBrainIcon className="stroke-2" />}
                text="Context Memory"
                subtitle="128,000 tokens"
              />
              <FeatureItem
                icon={<VoiceIcon className="stroke-2 size-4" />}
                text="Voice with vision"
              />
              <FeatureItem
                icon={<Plus className="size-4" />}
                text="Everything in Basic"
              />
            </div>
          </div>
          {/* SuperGrok Heavy Plan */}
          <div className="max-w-96 flex-1 w-full p-6 rounded-3xl bg-[#1a1b1e] flex flex-col gap-6 shadow-sm z-[10] self-stretch border border-[#27282b]">
            <div>
              <div className="flex items-center w-full justify-between h-6">
                <h1 className="text-sm font-bold text-white">
                  SuperGrok Heavy
                </h1>
              </div>
              <h3 className="text-3xl font-bold text-white h-10 space-x-1">
                <RollingNumber value={isYearly ? 3000.0 : 300.0} />
                {/* Use isYearly here */}
                <span className="text-[#A2A2A3] text-sm">
                  {isYearly ? "/year" : "/month"}
                </span>
              </h3>
            </div>
            <button className="w-full font-semibold text-sm rounded-full h-10 bg-white text-black hover:bg-white/80 cursor-pointer">
              Upgrade to Heavy
            </button>
            <div className="flex flex-col gap-2">
              <FeatureItem
                icon={<ElectricityIcon className="stroke-2 text-white" />}
                text="Exclusive preview of Grok 4 Heavy"
                highlighted
              />
              <FeatureItem
                icon={<CircleCheckIcon className="stroke-2" />}
                text="Extended access to Grok 4"
              />
              <FeatureItem
                icon={<FlaskIcon className="stroke-2 size-4" />}
                text="Early access to new features"
              />
              <FeatureItem
                icon={<ClearBrainIcon className="stroke-2 size-4" />}
                text="Larger context memory"
                subtitle="256,000 tokens"
              />
              <FeatureItem
                icon={<Plus className="size-4" />}
                text="Everything in SuperGrok"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
