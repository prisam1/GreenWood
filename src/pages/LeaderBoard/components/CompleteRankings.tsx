import { leaderboardData } from "@/mockData/champions";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import RankingCard from "./RankingCard";

export default function CompleteRankings() {
    return (
        <Card className="mt-8 p-6 flex w-full min-w-fit">
            <CardContent className="p-0">
                <CardTitle className="text-xl font-semibold text-blue-500">Complete Rankings</CardTitle>
                <CardDescription className="mt-1">All students ranked by points earned this month</CardDescription>
                <div className="mt-14">
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