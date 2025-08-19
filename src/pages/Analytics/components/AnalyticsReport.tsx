import { ANALYTICS } from "@/constant";
import { AnalyticsCard } from "./AnalyticCard";

export default function AnalyticsReport() {
  return (
    <div className="grid grid-cols-2 md:mt-8 mt-6 lg:grid-cols-4 lg:gap-6 gap-4">
      {ANALYTICS.map((s) => (
        <AnalyticsCard key={s.title} {...s} />
      ))}
    </div>
  );
}
