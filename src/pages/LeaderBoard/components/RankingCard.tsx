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
        <Card className={`w-full flex flex-row gap-0 justify-between text-center rounded-xl border-2 md:p-4 p-2 shadow-none md:mt-3 mt-2 ${student.rank <= 3
            ? "border-yellow-100 bg-yellow-50" : "border-blue-100 bg-blue-50"
            }`}>

            {/* Rank row with Avatar */}
            <CardContent className="flex p-0 items-center md:gap-5 gap-3">
                <div
                    className={`md:h-12 md:w-12 h-8 w-8 flex items-center justify-center rounded-full text-white 
      ${student.rank === 1 ? "md:text-lg" : "md:text-base text-sm"} 
      bg-${getRankColor(student.rank)}`}
                >
                    {student.rank > 3 ? `#${student.rank}` : getRankIcon(student.rank)}
                </div>
                <CardContent className="p-0 relative">
                    <Avatar
                        className={`md:w-12 md:h-12 h-9 w-9 border-2 ${student.rank <= 3
                            ? "border-yellow-300"
                            : "border-blue-300"
                            }`}
                    >
                        <AvatarImage
                            src={student.profileImg}
                            alt={student.name}
                        />
                    </Avatar>
                    {student.rank <= 3 && (
                        <CardDescription
                            className="text-xs absolute -top-1 -right-[7px]">
                            🔥
                        </CardDescription>)}
                </CardContent>

                <CardHeader className="p-0 flex flex-col">
                    <CardTitle className="mt-2 md:text-base text-xs">{student.name}</CardTitle>
                    <CardDescription className="md:text-sm text-xs text-muted-foreground">{student.class}</CardDescription>
                    <CardDescription className="md:text-sm text-xs text-muted-foreground mt-2">{student.icon}</CardDescription>
                </CardHeader>

            </CardContent >

            {/* Student score/details */}
            <CardContent className="p-0 flex flex-col items-center md:gap-3 gap-2">
                <CardContent className="p-0 flex flex-row">
                    <CardContent className="">
                        <CardTitle className="font-bold md:text-xl text-sm text-[#d88736]">
                            {student.points}
                        </CardTitle>
                        <CardDescription className="text-gray-400 md:text-sm text-xs">
                            points
                        </CardDescription>
                    </CardContent>
                    <CardContent className="flex items-center gap-3 text-sm text-gray-500 p-0">
                        <CardDescription className="text-green-500 md:text-base text-xs bg-green-100 rounded-full px-2 py-[2px]">
                            {student.accuracy}
                        </CardDescription>
                        <div className="flex items-center">
                            <Flame
                                color="#d88736"
                                className="w-5 h-5 "
                            />
                            <div className="text-gray-500 md:text-base text-xs">{student.fire}</div>
                        </div>
                    </CardContent>
                </CardContent>

                {/* View Profile Button */}
                <CardContent className="flex flex-row justify-end w-full p-0">
                    <Button
                        variant={"outline"}
                        className="border-gray-200 border-2 md:text-base text-xs text-gray-700"
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
