import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

interface HighlightTileProps {
    title: string;
    value: string;
    icon: string,
    bg: string,
    border: string,
    text :string
}


export const HighlightTile = (props: HighlightTileProps) => {

    const { title, value, icon, bg, border, text } = props

    return ( 
        <Card className={`${bg} ${border} p-3 border rounded-xl shadow-none`}>
            <CardContent className=" flex flex-col items-center justify-between">
                <CardTitle className={`text-3xl`}>{icon}</CardTitle>
                <CardTitle className={`text-lg font-semibold ${text}`}>{title}</CardTitle>
                <CardDescription className={`${text}`}>{value}</CardDescription>
            </CardContent>
        </Card>
    );
}