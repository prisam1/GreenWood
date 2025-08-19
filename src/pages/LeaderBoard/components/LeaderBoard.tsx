import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/constant";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function LeaderBoard() {
    return (
        <Card className="mt-6 p-0 shadow-[0_0_20px] shadow-gray-400/30  flex items-center w-full min-w-fit">
            {/* Top */}
            <CardContent className="py-4 flex flex-col items-center w-full rounded-t-xl bg-yellow-50 border-b-[1.5px] border-orange-200">

                <CardTitle className="md:text-[22px] md:mb-1 text-lg font-semibold text-blue-500">🥇 Campions Podium 🥇</CardTitle>
                <CardDescription className="mt-1 md:text-sm text-[11px] text-[#964B00] ">This month's top 3 achievers</CardDescription>

            </CardContent>


            <div className="flex flex-row gap-0 items-end pb-6 w-full max-w-md">
                <CardContent className="p-0 flex flex-col w-full">
                    <div className={`flex flex-col gap-4 items-center `}>
                        <Avatar className="relative">
                            <AvatarImage
                                src={IMAGES.user}
                                alt={"user"}
                                className="w-[70px] h-[70px] border-[3px] border-gray-400 rounded-full"
                            />
                            <CardTitle className="absolute -top-1 -right-1">🥈</CardTitle>
                        </Avatar>

                        <Card className="md:px-6 px-5 md:py-8 py-6 rounded-t-xl rounded-b-none gap-2 bg-gradient-to-b from-slate-500 via-slate-500 items-center text-white to-slate-400  ">
                            <CardTitle className="text-sm font-light">Hvff</CardTitle>
                            <CardDescription className="text-gray-200 text-[10px]">Class 7</CardDescription>
                            <CardTitle className="text-white text-lg">295 pts</CardTitle>
                        </Card>
                    </div>
                </CardContent>

                <CardContent className="p-0 flex flex-col items-center w-full">
                    <div className={`flex flex-col gap-4 items-center `}>

                        <Avatar className="relative">
                            <AvatarImage
                                src={IMAGES.user}
                                alt={"student"}
                                className="w-[84px] h-[84px] border-[3px] border-yellow-300 rounded-full"
                            />
                            <CardTitle className="absolute -top-[14px] -right-6 text-3xl">🏆</CardTitle>
                        </Avatar>

                        <Card className="md:px-6 md:py-8 px-5 py-6 rounded-t-xl rounded-b-none gap-2 bg-gradient-to-b from-yellow-500 via-yellow-500 items-center text-white to-yellow-400  ">
                            <CardTitle className="text-sm ">Ahan Kumar</CardTitle>
                            <CardDescription className="text-gray-200 text-[10px]">Class 8</CardDescription>
                            <CardTitle className="text-white text-lg">830 pts</CardTitle>
                            <CardTitle className="text-white text-md">🏆🔥⚡</CardTitle>
                        </Card>
                    </div>
                </CardContent>

                <CardContent className="p-0 flex flex-col items-center w-full">
                    <div className={`flex flex-col gap-4 items-center `}>
                        <Avatar className="relative">
                            <AvatarImage
                                src={IMAGES.user}
                                alt={"student"}
                                className="w-[70px] h-[70px] border-[3px] border-orange-300 rounded-full"
                            />
                            <CardTitle className="absolute -top-1 -right-1">🥉</CardTitle>
                        </Avatar>

                        <Card className="md:px-6 md:py-8 px-5 py-6 rounded-t-xl rounded-b-none gap-2 bg-gradient-to-b from-orange-500 via-orange-500 items-center text-white to-orange-400  ">
                            <CardTitle className="text-sm font-light">Flower Girl</CardTitle>
                            <CardDescription className="text-gray-200 text-[10px]">Class 6</CardDescription>
                            <CardTitle className="text-white text-lg">190 pts</CardTitle>
                        </Card>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}