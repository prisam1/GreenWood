import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Funnel, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import LeaderBoard from "@/pages/LeaderBoard/components/LeaderBoard";
import CompleteRankings from "@/pages/LeaderBoard/components/CompleteRankings";
import HighlightsRowLeaderBoard from "@/pages/LeaderBoard/components/HighlightsRowLeaderBoard";
import { Badge } from "@/components/ui/badge";
import { CLASSES, FILTER, IMAGES, MONTHS } from "@/constant";

export default function Leaderboard() {
    const [query, setQuery] = useState("");

    return (
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-row gap-2">
                    <Trophy
                        color="gold" />
                    <img
                        src={IMAGES.trophy}
                        alt="trophy"
                        className="w-8 h-8"
                    />
                    <CardTitle className="text-lg sm:text-2xl md:text-4xl font-bold text-blue-500">School Leaderboard</CardTitle>
                </div>
                <Badge
                    variant="outline"
                    className="rounded-md md:p-2 p-1 px-2 self-end md:px-4 md:text-sm text-[10px] text-gray-500">
                    Updated: 12/08/2025
                </Badge>
            </div>
            <CardDescription className="mt-1 md:text-base text-xs">Celebrating our top performers and encourage healthy competition</CardDescription>

            {/* Champions Podium */}
            <LeaderBoard />

            <Card className="md:mt-8 mt-6 shadow-[0_0_20px] shadow-gray-400/20 md:py-6 py-2">
                <CardContent className="flex items-center justify-between md:p-0 md:px-5 p-2 ">

                    <div className="flex md:flex-row flex-col items-center gap-4 w-full">
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search students…"
                            className="pl-8 rounded-xl w-full placeholder:text-gray-500 border-2 md:py-6 py-4"
                        />

                        {/* Classes */}
                        <CardContent className="p-0 flex md:justify-end gap-4 justify-between">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="flex items-center md:text-sm text-xs border-2 gap-2 p-0 md:py-6 py-4 md:px-6 px-2">
                                        All Classes
                                        <ChevronDown className="md:h-6 md:w-6 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {CLASSES.map((c) => (
                                        <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Months */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="flex items-center md:text-sm text-xs border-2 gap-2 p-0 md:py-6 py-4 md:px-6 px-2">
                                        This Month
                                        <ChevronDown className="h-6 w-6" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {MONTHS.map((c) => (
                                        <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>


                            {/* More Filters */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="flex border-2 items-center md:text-sm text-xs gap-2 p-0 md:py-6 py-4 md:px-6 px-2">
                                        <Funnel className="h-6 w-6" />
                                        More Filters
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {FILTER.map((c) => (
                                        <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </div>
                </CardContent>
            </Card>

            {/* Rankings */}
            <CompleteRankings />

            {/* Highlights */}
            <HighlightsRowLeaderBoard />
        </div>
    );
}
