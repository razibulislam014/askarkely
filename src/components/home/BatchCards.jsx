import burgur from "../../assets/images/115-burger.png";
import bubbleTea from "../../assets/images/bubble-tea.jpg";
import saladBoul from "../../assets/images/salad-bowl.jpg";
import BatchCard from "./BatchCard";

export default function BatchCards() {
  const batchCardsData = [
    {
      id: 1,
      status: "Open for orders",
      date: "Tue, Oct 20",
      title: "Afternoon snacks & drinks",
      orderBefore: "Tue, Oct 20, 1:00 PM",
      expectedPickup: "3:40–3:50 PM",
      pickupPoint: "The Almond Drop",
      courier: {
        name: "William",
        vehicle: "Blue Tesla Model x",
        licensePlate: "***318",
      },
      availableStores: [
        { title: "UMe Tea", img: bubbleTea },
        { title: "Pokeworks", img: saladBoul },
        { title: "Bonchon", img: burgur },
      ],
    },
    {
      id: 2,
      status: "Upcoming",
      date: "Tue, Oct 20",
      title: "Your next campus batch",
      orderBefore: "Tue, Oct 20, 2:00 PM",
      expectedPickup: "3:46–4:00 PM",
      pickupPoint: "The Almond Drop",
      courier: {
        name: "William",
        vehicle: "Blue Tesla Model x",
        licensePlate: "***318",
      },
      availableStores: [
        { title: "In-N-Out Burger", img: bubbleTea },
        { title: "Boba Bliss", img: saladBoul },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {batchCardsData.map((batch) => (
        <BatchCard key={batch.id} data={batch} />
      ))}
      <p className="text-muted-text text-sm">Times are shown in campus local time. Pickup windows are estimates and may change.</p>
    </div>
  );
}
