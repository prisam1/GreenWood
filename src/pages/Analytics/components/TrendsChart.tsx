import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", engagement: 45, learning: 30 },
    { month: "Feb", engagement: 50, learning: 35 },
    { month: "Mar", engagement: 46, learning: 42 },
    { month: "Apr", engagement: 52, learning: 47 },
    { month: "May", engagement: 58, learning: 50 },
];

export default function StudentEngagementTrends() {
    return (
        <Card className="rounded-2xl shadow-[0_0_20px] shadow-gray-400/30  mt-6 w-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg">
                    Student Engagement Trends
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                    Monthly engagement patterns and learning time
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="w-full h-[300px] md:h-[350px] lg:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 0, right: -30, left: -30, bottom: 0 }}
                            barGap={8}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: 10, fill: "#6b7280" }}
                                axisLine={true}
                                tickLine={true}
                            />
                            {/* Engagement Y Axis (left side) */}
                            <YAxis
                                yAxisId="left"
                                orientation="left"
                                tick={{ fontSize: 10, fill: "#6b7280" }}
                                axisLine={true}
                                tickLine={true}
                            />
                            {/* Learning Time Y Axis (right side) */}
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                tick={{ fontSize: 10, fill: "#6b7280" }}
                                axisLine={true}
                                tickLine={true}
                            />
                            <Tooltip
                                contentStyle={{
                                    fontSize: "12px",
                                    borderRadius: "8px",
                                }}
                            />
                            <Bar
                                yAxisId="left"
                                dataKey="engagement"
                                fill="#3b82f6" // blue
                                radius={[2, 2, 0, 0]}
                                maxBarSize={70}
                            />
                            <Bar
                                yAxisId="right"
                                dataKey="learning"
                                fill="#22c55e" // green
                                radius={[2, 2, 0, 0]}
                                maxBarSize={70}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
