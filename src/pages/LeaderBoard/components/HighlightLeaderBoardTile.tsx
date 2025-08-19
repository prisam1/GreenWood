import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

interface HighlightTileProps {
    title: string;
    name: string;
    icon: string,
    value: string,
    textColor: string
}


export const HighlightLeaderBoardTile = (props: HighlightTileProps) => {

    const { title, name, icon, value, textColor } = props

    return (
        <Card className={`py-5 rounded-xl shadow-[0_0_20px] shadow-gray-400/20 `}>
            <CardContent className="flex flex-col items-center justify-between">
                <CardTitle className={`text-2xl`}>{icon}</CardTitle>
                <CardTitle className={`text-sm font-bold`}>{title}</CardTitle>
                <CardDescription className="text-gray-500 text-xs">{name}</CardDescription>
                <CardTitle className={`text-lg font-semibold ${textColor} `}>{value}</CardTitle>

            </CardContent>
        </Card>
    );
}