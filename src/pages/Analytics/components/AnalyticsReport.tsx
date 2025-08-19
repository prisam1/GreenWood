import { ANALYTICS } from "@/constant"; 
import { AnalyticsCard } from "./AnalyticCard";

export default function AnalyticsReport() {
  return (
    <div className="grid grid-cols-2 mt-6 lg:grid-cols-4 gap-6">
      {ANALYTICS.map((s) => (
        <AnalyticsCard key={s.title} {...s} />
      ))}
    </div>
  );
}
