import { STATS } from "@/constant";
import { StatsCard } from "./StatsCard";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-6">
      {STATS.map((s) => (
        <StatsCard key={s.title} {...s} />
      ))}
    </div>
  );
}
