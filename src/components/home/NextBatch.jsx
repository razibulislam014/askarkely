import { ChevronDown, Info, MapPinned, Star } from "lucide-react";
import Header from "../global/Header";

export default function NextBatch() {
  return (
    <div className="flex gap-5 items-center justify-between">
      <div>
        <div className="text-foreground text-base tracking-tight flex items-center gap-x-2">
          <div className="w-8.5 h-8.5 flex items-center justify-center p-2 border border-foreground border-dashed rounded-full">
            <div className="w-3 h-3 bg-primary rotate-45" />
          </div>
          YOUR CURRENT SELCTED CAMPUS
          <span className="text-primary font-bold">
            “ Los Altos High School”{" "}
          </span>
        </div>
        <Header className="leading-tight">
          What’s in your
          <span className="text-primary block"> next batch?</span>
        </Header>
        <p className="text-muted-text text-xl">
          Choose a day, check the pickup window, then explore the stores.
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="px-4 py-2 rounded-xl bg-white border border-primary mx-auto flex items-center gap-x-4">
          <p className="p-2 gap-2.5 bg-primary border border-primary w-10.5 h-10.5 rounded-full">
            <MapPinned className="text-white" />
          </p>
          <div>
            <p className="text-xl text-muted-text text-left">YOUR CAMPUS</p>
            <p className="text-2xl text-primary text-left font-bold">
              Los Altos High School
            </p>
          </div>
          <div className="flex items-center">
            <button className="border border-border px-2 py-1 text-muted-text text-xs font-medium rounded-sm bg-border flex items-center">
              <Star size={21.5} className="fill-primary stroke-primary" />{" "}
              Default
            </button>
          </div>
          <ChevronDown />
        </div>
        <p className="flex items-center text-muted-text gap-x-2">
          <Info size={16} className="stroke-muted-text" />
          This is your default campus. You can change it anytime.
        </p>
      </div>
    </div>
  );
}
