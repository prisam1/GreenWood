import { Badge } from "@/components/ui/badge";
import PerformanceChart from "@/components/PerformanceChart";
import { CardTitle } from "@/components/ui/card";
import AnalyticsReport from "./components/AnalyticsReport";
import SkillPerformanceCard from "./components/SkillPerformanceChart";
import StudentEngagementTrends from "./components/TrendsChart";

export default function Analytics() {

    return (
        <div className="pt-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-4">
                <CardTitle className="text-xl sm:text-2xl md:text-4xl  font-bold text-black">
                    Analytics & Reports
                </CardTitle>
                <div className="flex items-center gap-2">
                    <Badge
                        variant="outline"
                        className="rounded-md md:p-2 p-1 px-2 md:mt-0 mt-2 self-end md:px-4 md:text-sm text-[10px] text-gray-500">
                        CBSE Board • Last updated: 12/08/2025, 15:46:57
                    </Badge>
                </div>
            </div>

            {/* Analytics report  */}
            <AnalyticsReport />

            <div className="md:mt-8 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PerformanceChart
                    title={"Student Performance Distribution"}
                />
                <SkillPerformanceCard />
            </div>

            {/* <StudentEngagementTrends /> */}
            <StudentEngagementTrends />

        </div>
    );
}
