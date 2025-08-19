import {
    Card,
    CardContent,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

export const AnalyticsCard = ({ title, value, data }: any) => {
    return (
        <Card className="shadow-[0_0_20px] shadow-gray-400/20 lg:p-6 p-4">
            <CardContent className="p-0">
                <CardTitle className="md:text-base text-sm text-muted-foreground">{title}</CardTitle>
                <CardTitle className="md:text-2xl text-lg font-bold text-black">{value}</CardTitle>
                <CardDescription className="text-[#22c55e] md:text-sm text-xs">{data}</CardDescription>
            </CardContent>
        </Card>
    );
}
