import ChampionCard from "./ChampionCard";
import { leaderboardData } from "@/mockData/champions";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import HighlightsRow from "./HighlightsRow";
import { Trophy } from "lucide-react";
import { IMAGES } from "@/constant";

export default function TopChampions() {
  return (
    <Card className="mt-6 md:p-6 p-[14px] flex items-center shadow-[0_0_20px] shadow-gray-400/30  w-full min-w-fit">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <Trophy
            color="gold"
          />
          <img
            src={IMAGES.trophy}
            alt="trophy"
            className="w-6 h-6"
          />
          <CardTitle className="md:text-xl text-sm font-semibold text-blue-500">School Leaderboard – Top 10 Champions</CardTitle>
        </div>
        <CardDescription className="mt-1 md:text-sm text-[10px]">Our highest performing students this month with points and achievements</CardDescription>

        <div className="grid md:mt-10 mt-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6 gap-4 ">
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