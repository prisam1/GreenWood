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
import { IMAGES } from "@/constant";

export default function Leaderboard() {
    const [query, setQuery] = useState("");

    return (
        <div className="pt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-row gap-2">
                    <Trophy
                        color="gold" />
                    <div className="relative w-8 h-8">
                        <img
                            src={IMAGES.trophy}
                            alt="trophy"
                            className="absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-amber-50 mix-blend-multiply" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-500">School Leaderboard</CardTitle>
                </div>
                <Badge variant="outline" className="rounded-md p-2 px-4 text-gray-500">
                    Updated: 12/08/2025
                </Badge>
            </div>
            <CardDescription className="mt-1">Celebrating our top performers and encourage healthy competition</CardDescription>


            <LeaderBoard />

            <Card className="mt-8">
                <CardContent className="flex items-center justify-between">

                    <div className="flex items-center gap-4 w-full">
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search students…"
                            className="pl-8 rounded-xl w-full placeholder:text-gray-500 border-2 py-6"
                        />

                        {/* Classes */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center border-2 gap-2 p-0 py-6">
                                    All Classes
                                    <ChevronDown className="h-6 w-6" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {[
                                    "All",
                                    "Class 1",
                                    "Class 2",
                                    "Class 3",
                                    "Class 4",
                                    "Class 5",
                                    "Class 6",
                                    "Class 7",
                                    "Class 8",
                                ].map((c) => (
                                    <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Months */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center border-2 gap-2 p-0 py-6">
                                    This Month
                                    <ChevronDown className="h-6 w-6" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {[
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sept",
                                    "Nov",
                                    "Dec",
                                ].map((c) => (
                                    <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>


                        {/* More Filters */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex border-2 items-center gap-2 p-0 py-6">
                                    <Funnel className="h-6 w-6" />
                                    More Filters
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {[
                                    "Alphabetical",
                                    "Marks",
                                    "Points",
                                    "Lessons",
                                    "Streak"
                                ].map((c) => (
                                    <DropdownMenuItem key={c}>{c}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </CardContent>
            </Card>

            <CompleteRankings />
            <HighlightsRowLeaderBoard />
        </div>
    );
}
