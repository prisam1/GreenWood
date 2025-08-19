import { STATS } from "@/constant";
import { StatsCard } from "./StatsCard";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:mt-8 mt-6 lg:grid-cols-4 lg:gap-6 gap-4">
      {STATS.map((s) => (
        <StatsCard key={s.title} {...s} />
      ))}
    </div>
  );
}
