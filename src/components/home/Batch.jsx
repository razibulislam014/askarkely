import BatchCards from "./BatchCards";
import DateTabs from "./DateTabs";
import NextBatch from "./NextBatch";

export default function Batch() {
  return (
    <section className="flex flex-col py-25 px-16 gap-y-8 bg-background">
      <NextBatch />
      <DateTabs />
      <BatchCards/>
    </section>
  );
}
