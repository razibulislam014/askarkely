import DateTab from "./DateTab";

export default function DateTabs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 bg-soft p-3 rounded-2xl">
      <DateTab title="Open for orders" date="Tue, Oct 20" isActive />
      <DateTab title="Upcoming" date="Wed, Oct 21" />
      <DateTab title="Upcoming" date="Thu, Oct 22" />
      <DateTab title="Upcoming" date="Fri, Oct 23" />
    </div>
  );
}
