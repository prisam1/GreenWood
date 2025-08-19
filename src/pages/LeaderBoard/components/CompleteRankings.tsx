import { leaderboardData } from "@/mockData/champions";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import RankingCard from "./RankingCard";

export default function CompleteRankings() {
    return (
        <Card className="md:mt-8 mt-6 md:p-6 p-3 shadow-[0_0_20px] shadow-gray-400/30 flex w-full min-w-fit">
            <CardContent className="p-0">
                <CardTitle className="md:text-xl text-base font-semibold text-blue-500">Complete Rankings</CardTitle>
                <CardDescription className="mt-1 md:text-sm text-xs">All students ranked by points earned this month</CardDescription>
                <div className="md:mt-14 mt-6">
                    {leaderboardData.map((c) => (
                        <RankingCard
                            student={c}
                            key={c.name} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}