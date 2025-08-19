import ChampionCard from "./ChampionCard";
import { leaderboardData } from "@/mockData/champions";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import HighlightsRow from "./HighlightsRow";
import { Trophy } from "lucide-react";
import { IMAGES } from "@/constant";

export default function TopChampions() {
  return (
    <Card className="mt-6 p-6 flex items-center shadow-[0_0_20px] shadow-gray-400/30  w-full min-w-fit">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <Trophy
            color="gold"
          />
          <div className="relative w-6 h-6">
            <img
              src={IMAGES.trophy}
              alt="trophy"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-amber-50 mix-blend-multiply" />
          </div>
          <CardTitle className="text-xl font-semibold text-blue-500">School Leaderboard – Top 10 Champions</CardTitle>
        </div>
        <CardDescription className="mt-1">Our highest performing students this month with points and achievements</CardDescription>

        <div className="grid mb-3 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {leaderboardData.filter((student) => student.rank <= 10).map((c) => {
            return (
              <ChampionCard student={c} key={c.name} />
            )
          })}
        </div>

        {/* Highlights */}
        <HighlightsRow />
      </CardContent>
    </Card>
  );
}