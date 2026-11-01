import {
  ChevronDown,
  CirclePlay,
  Info,
  MapPinned,
  MoveUpRight,
  Star,
} from "lucide-react";
import banner from "../../assets/images/032-food-banner.png";
import Button from "../global/Button";
import Header from "../global/Header";

export default function Hero() {
  const bgStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      className="py-16 flex items-center justify-center flex-col gap-y-8"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.85)_25%,rgba(255,255,255,0)_50%)]" />
      <div className="space-y-5 z-10">
        <Header center>
          Your favorites. One<br/>campus drop.
        </Header>
        <p className="text-center text-xl text-muted-text">
          Food, boba and drinks from local spots, grouped into
          <br />
          one scheduled delivery to your campus drop zone.
        </p>
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
      <div className="flex gap-x-5.5 justify-center z-10">
        <Button isBg>
          View available batches <MoveUpRight size={20} />
        </Button>
        <Button className="flex items-center gap-x-2.5">
          <CirclePlay size={20} /> How it Works
        </Button>
      </div>
    </section>
  );
}
