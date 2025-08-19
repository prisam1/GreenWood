import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Flame } from "lucide-react";

interface ChampionCardProps {
    student: {
        rank: number;
        name: string;
        class: string;
        points: number;
        lessons: number;
        accuracy: string;
        streak: string;
        profileImg: string;
        icon: string;
        fire: number
    };
}

export default function RankingCard({ student }: ChampionCardProps) {

    const rankColors = {
        1: "gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600",
        2: "gradient-to-br from-gray-300 via-gray-500 to-gray-600",
        3: "gradient-to-br from-orange-300 via-orange-500 to-orange-600",
        default: "gradient-to-br from-blue-300 via-blue-500 to-blue-600",
    };

    const getRankColor = (rank: number) =>
        rankColors[rank as keyof typeof rankColors] || rankColors.default;

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return <div className={`h-6 w-6 text-${getRankColor(rank)}`}>🏆</div>;
            case 2:
                return <div className={`h-6 w-6 text-${getRankColor(rank)}`}>🥈</div>;
            case 3:
                return <div className={`h-6 w-6 text-${getRankColor(rank)}`}>🥉</div>;
            default:
                return <div className={`h-6 w-6 text-${getRankColor(rank)}`}>🌟</div>;
        }
    };

    return (
        <Card className={`w-full flex flex-row gap-0 justify-between text-center rounded-xl border-2 p-4 shadow-none mb-3 ${student.rank <= 3
            ? "border-yellow-100 bg-yellow-50" : "border-blue-100 bg-blue-50"
            }`}>

            {/* Rank row with Avatar */}
            <CardContent className="flex p-0 items-center gap-5">
                <div
                    className={`h-12 w-12 flex items-center justify-center rounded-full text-white 
      ${student.rank === 1 ? "text-lg" : "text-md"} 
      bg-${getRankColor(student.rank)}`}
                >
                    {student.rank > 3 ? `#${student.rank}` : getRankIcon(student.rank)}
                </div>
                <CardContent className="p-0 relative">
                    <Avatar
                        className={`w-12 h-12 border-2 ${student.rank <= 3
                            ? "border-yellow-300"
                            : "border-blue-300"
                            }`}
                    >
                        <AvatarImage
                            src={student.profileImg}
                            alt={student.name}
                        />
                    </Avatar>
                    {student.rank <= 3 && (<CardDescription className="text-xs absolute -top-1 -right-[7px]">🔥</CardDescription>)}
                </CardContent>

                <CardHeader className="p-0 flex flex-col gap-1">
                    <CardTitle className="mt-2">{student.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{student.class}</CardDescription>
                    <CardDescription className="text-sm text-muted-foreground mt-2">{student.icon}</CardDescription>
                </CardHeader>

            </CardContent >

            {/* Student score/details */}
            <CardContent className="p-0 flex flex-col items-center gap-3">
                <CardContent className="p-0 flex flex-row">
                    <CardContent className="">
                        <CardTitle className="font-bold text-[#d88736]">
                            {student.points}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            points
                        </CardDescription>
                    </CardContent>
                    <CardContent className="flex items-center gap-3 text-sm text-gray-500 p-0">
                        <CardDescription className="text-green-500 bg-green-100 rounded-full px-2 py-[2px]">
                            {student.accuracy}
                        </CardDescription>
                        <div className="flex items-center">
                            <Flame
                                color="#d88736"
                                className=""
                            />
                            <div className="text-sm text-gray-500">{student.fire}</div>
                        </div>
                    </CardContent>
                </CardContent>

                {/* View Profile Button */}
                <CardContent className="flex flex-row justify-end w-full p-0">
                    <Button
                        variant={"outline"}
                        className="border-gray-200 border-2 text-gray-700"
                    >
                        <Eye
                            color="gray" />
                        View
                    </Button>
                </CardContent>
            </CardContent>
        </Card>
    );
}
