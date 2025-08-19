import {
    Card,
    CardContent,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

export const AnalyticsCard = ({ title, value, data }: any) => {
    return (
        <Card className="shadow-[0_0_20px] shadow-gray-400/20  p-6">
            <CardContent className="p-0">
                <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
                <CardTitle className="text-2xl font-bold text-black">{value}</CardTitle>
                <CardDescription className="text-[#22c55e]">{data}</CardDescription>
            </CardContent>
        </Card>
    );
}
