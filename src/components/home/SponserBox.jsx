import { ArrowRightToLine } from "lucide-react";

export default function SponserBox({ img, name, des }) {
  return (
    <div className="rounded-[18px] bg-background border border-border w-full">
      <div className="w-full overflow-hidden rounded-t-[18px]">
        <img src={img} className="object-contain w-full h-51" />
      </div>
      <div className="px-4 pt-4 pb-6">
        <div className="flex items-center justify-between">
          <p>{name}</p>
          <p className="p-2 bg-white border border-primary rounded-xl">
            <ArrowRightToLine size={20} />
          </p>
        </div>
        <p className="text-muted-text">{des}</p>
      </div>
    </div>
  );
}
