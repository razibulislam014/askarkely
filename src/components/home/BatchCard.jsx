import {
  ArrowRightToLine,
  Calendar,
  Clock,
  Copy,
  MapPin,
  Share2,
  SignpostBig,
  Store,
  Van,
  Zap,
} from "lucide-react";

import Button from "../global/Button";

export default function BatchCard({ data }) {
  const {
    availableStores,
    courier,
    pickupPoint,
    expectedPickup,
    orderBefore,
    title,
    date,
    status,
  } = data;
  return (
    <div className="flex flex-col gap-y-5 p-6 bg-white rounded-3xl border border-line">
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <button className="border border-border pr-2 pl-1 py-0.5 rounded-full text-xs font-medium bg-[#E0FAEC] text-forest gap-0.5 flex items-center">
              <Zap size={16} className="fill-primary stroke-primary" /> {status}
            </button>
            <p className="text-sm text-muted-text">{date}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Button leftIcon>
              <Copy size={16} />
              Copy Link
            </Button>
            <Button isBg>
              <Share2 size={16} />
              Copy Link
            </Button>
          </div>
        </div>
        <h3 className="text-foreground font-semibold text-2xl">{title}</h3>
        <div className="flex items-center justify-between gap-x-4 ">
          <div>
            <p className="text-muted-text text-xs flex items-center gap-x-2">
              <Calendar size={18} className="text-primary" />
              ORDER BEFORE
            </p>
            <p className="text-foreground text-base flex items-center gap-x-2">
              {orderBefore}
            </p>
          </div>
          <div>
            <p className="text-muted-text text-xs flex items-center gap-x-2">
              <Clock size={18} className="text-primary" />
              EXPECTED PICKUP
            </p>
            <p className="text-foreground text-base flex items-center gap-x-2">
              {expectedPickup}
            </p>
          </div>
        </div>
        <div className="border-t border-border" />
        <div className="flex items-start justify-between gap-x-5">
          <div>
            <p className="flex items-center gap-x-2 text-xs text-muted-text font-bold">
              <MapPin className="text-primary" size={18} />
              PICKUP Point
            </p>
            <p className="px-2 py-1 flex gap-2.5 text-foreground">
              <SignpostBig size={16} className="text-primary" />
              {pickupPoint}
            </p>
          </div>
          <div className="p-2 flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-xs text-muted-text font-bold">
              <Van className="text-primary" size={18} />
              Your Courier
            </p>
            <div className="flex flex-col gap-y-1">
              <p className="text-base font-semibold text-foreground">
                {courier.name}
              </p>
              <p className="text-xs text-muted-text">{courier.vehicle}</p>
              <p className="text-xs text-muted-text">{courier.licensePlate}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="text-muted-text text-xs font-bold">
            Available Stores
          </h5>
          <div className="inline-flex rounded-xl gap-x-2 overflow-hidden">
            {availableStores.map((store) => (
              <button
                key={store.title}
                className="relative p-2 rounded-lg overflow-hidden bg-cover bg-center text-white font-semibold transition-transform focus:outline-none"
                style={{ backgroundImage: `url(${store.img})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <span className="relative z-10 text-sm flex items-center gap-x-2">
                  <Store size={20} />
                  {store.title}
                  <ArrowRightToLine />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
