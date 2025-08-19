import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../../../components/ui/card";

interface StudentProps {
    student: {
        rank: number;
        name: string;
        class: string;
        points: number;
        lessons: number;
        accuracy: string;
        streak: string;
        profileImg: string;
    };
}

export const StudentChip = ({ student }: StudentProps) => {

    return (
        <Card className="flex flex-row items-center justify-between rounded-2xl shadow-[0_0_20px] shadow-gray-400/30 p-3">
            <CardContent className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2">
                    <AvatarImage
                        src={student.profileImg}
                        alt={student.name} />
                </Avatar>
                <div>
                    <CardTitle className="text-sm font-medium leading-tight">{student.name}</CardTitle>
                    <CardDescription>{student.class}</CardDescription>
                    <div className="flex flex-row gap-3 items-center">
                        <CardDescription
                            className={`${parseInt(student.accuracy) >= 90 ? "bg-green-200 text-green-600" : "bg-blue-100 text-blue-600"} px-2 rounded-full`}>
                            {student.accuracy}%
                        </CardDescription>
                        <div className="">
                            <CardDescription className="text-gray-500 text-[12px]">{student.points}</CardDescription>
                            <CardDescription className="text-gray-500 text-[12px]">XP</CardDescription>
                        </div>

                    </div>
                </div>
            </CardContent>
            <Button
                size="icon"
                variant={"outline"}
                className="px-5 border-2 shadow-md text-gray-80">
                <Eye className="h-4 w-4" />
            </Button>
        </Card>
    );
}