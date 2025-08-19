import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Star } from "lucide-react";

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

export default function ChampionCard({ student }: ChampionCardProps) {

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
    <Card className="w-64 flex flex-col gap-3 relative text-center rounded-2xl shadow-[0_0_20px] overflow-hidden shadow-gray-400/20 p-0 pb-4">
      {/* Top Row with Icon */}
      <div className="flex justify-between p-0">
        <CardTitle className="absolute -left-[6px] -top-[4px] text-2xl">{getRankIcon(student.rank)}</CardTitle>
        <CardTitle
          className={`h-12 w-12 absolute -right-[10px] -top-[10px] pl-[0px] pt-[14px] text-[14px] text-white rounded-full bg-${getRankColor(student.rank)}`}
        >
          #{student.rank}
        </CardTitle>
      </div>

      {/* Avatar with Border */}
      <CardHeader className="flex flex-col gap-1 items-center py-4 px-8">
        <div className={`relative flex justify-center w-full ${student.rank <= 3 ? "bg-yellow-100 rounded-full" : ""}`}>
          <Avatar
            className={`w-20 h-20 border-[4px] ${student.rank === 1
              ? "border-yellow-300"
              : student.rank === 2
                ? "border-gray-300"
                : student.rank === 3
                  ? "border-orange-300"
                  : "border-blue-300"
              }`}
          >
            <AvatarImage
              src={student.profileImg}
              alt={student.name}
            />
          </Avatar>
          {student.rank <= 3 && <CardTitle className="absolute items-center bottom-[6px] mr-[6px] text-2xl">{getRankIcon(student.rank)}</CardTitle>}
        </div>
        <CardTitle className="mt-2">{student.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{student.class}</CardDescription>

        {/* Points badge */}
        <p
          className={`mt-1 font-bold bg-${getRankColor(
            student.rank
          )} text-white px-3 py-1 rounded-full`}
        >
          {student.points} pts
        </p>
      </CardHeader>

      {/* Accuracy & Streak */}
      <CardContent className="p-0 flex flex-col items-center space-y-1">
        <CardDescription className="text-green-500 bg-green-100 rounded-full px-2 py-[2px]">
          {student.accuracy} Accuracy
        </CardDescription>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Star className={`h-4 w-4 text-yellow-400`} />
          {student.lessons}
          <div className="bg-green-500 rounded-full h-2 w-2" />
          <div className="text-sm text-gray-500">{student.streak}</div>
        </div>
      </CardContent>

      {/* View Profile Button */}
      <CardFooter className="p-0 px-6   justify-center mt-2 mb-3">
        <Button
          variant={"outline"}
          className="border-2 shadow-md w-full"
        >
          <Eye />
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
