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
        <Card className={`md:py-5 py-4 rounded-xl shadow-[0_0_20px] shadow-gray-400/20 `}>
            <CardContent className="flex flex-col items-center justify-between">
                <CardTitle className={`md:text-2xl text-base`}>{icon}</CardTitle>
                <CardTitle className={`md:text-sm text-xs font-bold`}>{title}</CardTitle>
                <CardDescription className="text-gray-500 text-xs">{name}</CardDescription>
                <CardTitle className={`md:text-lg text-sm font-semibold ${textColor} `}>{value}</CardTitle>
            </CardContent>
        </Card>
    );
}