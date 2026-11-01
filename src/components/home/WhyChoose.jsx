import Header from "../global/Header";
import SponserBox from "./SponserBox";

import { ChevronLeft, ChevronRight, CircleArrowOutUpRight } from "lucide-react";
import ap from "../../assets/images/ap-logo.png";
import paris from "../../assets/images/paris-baguette-logo.png";
import Teaspoon from "../../assets/images/teaspoon-logo.png";
import umm from "../../assets/images/ume-logo.png";
import Button from "../global/Button";

export default function WhyChoose() {
  return (
    <div className="flex flex-col gap-y-16 px-16 py-25 bg-white">
      <div className="flex flex-col gap-y-5">
        <div className="text-foreground text-base tracking-tight flex items-center justify-center gap-x-2">
          <div className="w-8.5 h-8.5 flex items-center justify-center p-2 border border-foreground border-dashed rounded-full">
            <div className="w-3 h-3 bg-primary rotate-45" />
          </div>
          GOOD FOOD, CLOSE TO CAMPUS
        </div>
        <Header className="text-center leading-none">
          Local favorites.
          <span className="text-primary block">More possibilities.</span>
        </Header>
        <p className="text-muted-text text-center">
          Some of the local spots featured on BatchBox.
        </p>
      </div>
      <div className="flex items-center justify-between gap-x-6">
        <button className="flex shrink-0 w-10 h-10 items-center justify-center rounded-full shadow bg-white hover:bg-gray-50 transition-colors">
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <SponserBox
          img={umm}
          name="UMe"
          des="Boba & Signature Yogurt Driniks"
        />
        <SponserBox
          img={ap}
          name="Alexander’s Patisserie"
          des="Fine Pastries & Coffee"
        />
        <SponserBox img={paris} name="Paris Baguette" des="Pastries & Bakery" />
        <SponserBox img={Teaspoon} name="Teaspoon" des="Chipotle · Pokeworks" />

        <button className="flex shrink-0 w-10 h-10 items-center justify-center rounded-full shadow bg-white hover:bg-gray-50 transition-colors">
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Button isBg>
          See All Available Stores <CircleArrowOutUpRight />
        </Button>
      </div>
    </div>
  );
}
