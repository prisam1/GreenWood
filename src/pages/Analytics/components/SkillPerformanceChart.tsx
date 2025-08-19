import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from "recharts";

type Skill = { name: string; value: number; color: string; improvement: string };

const skills: Skill[] = [
    { name: "Vocabulary", value: 82, color: "#3b82f6", improvement: "+5%" }, // blue
    { name: "Grammar", value: 78, color: "#22c55e", improvement: "+8%" }, // green
    { name: "Pronunciation", value: 76, color: "#f59e0b", improvement: "+12%" }, // orange
    { name: "Listening", value: 85, color: "#a855f7", improvement: "+3%" }, // purple
    { name: "Speaking", value: 74, color: "#ef4444", improvement: "+15%" }, // red
];

// Rotated X-axis tick (slight tilt)
function RotatedTick(props: any) {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={12}
                textAnchor="end"
                className="fill-slate-500 text-[10px] sm:text-[12px] md:text-[13px]"
                transform="rotate(-40)"
            >
                {payload.value}
            </text>
        </g>
    );
}

// Progress bar row
function ProgressRow({ name, value, color }: Skill) {
    return (
        <div className="mb-3">
            <div className="mb-1 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-slate-800">{name}</span>
                <span className="font-semibold text-slate-900">{value}%</span>
            </div>
            <div className="h-2 sm:h-3 w-full rounded-full bg-slate-200">
                <div
                    className="h-2 sm:h-3 rounded-full"
                    style={{ width: `${value}%`, backgroundColor: color }}
                />
            </div>
        </div>
    );
}

export default function SkillPerformanceCard() {
    return (
        <Card className="rounded-2xl shadow-[0_0_20px] shadow-gray-400/20 w-full">
            {/* Header */}
            <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg md:text-xl">
                    Average Performance by Skill Area
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                    Individual skill performance metrics and improvements
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-12">
                {/* Progress list */}
                <div className="space-y-3">
                    {skills.map((s) => (
                        <ProgressRow key={s.name} {...s} />
                    ))}
                </div>

                {/* Chart */}
                <div className="w-full md:mt-8 mt-4 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={skills}
                            margin={{ top: 8, right: 8, bottom: 20, left: 0 }}
                            barGap={8}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                interval={0}
                                height={40}
                                tick={<RotatedTick />}
                                tickLine={true}
                                axisLine={true}
                            />
                            <YAxis
                                domain={[0, 100]}
                                tick={{ fontSize: 10, fill: "#6b7280" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    fontSize: "12px",
                                    borderRadius: "8px",
                                }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={70}>
                                {skills.map((s, i) => (
                                    <Cell key={i} fill={s.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Month-over-Month Improvement */}
                <div className="rounded-xl bg-slate-50 p-3 sm:p-4">
                    <p className="mb-3 text-xs sm:text-sm md:text-base font-medium text-slate-700">
                        Month-over-Month Improvement
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-2">
                        {skills.map((s) => (
                            <div
                                key={s.name}
                                className="flex items-center justify-between rounded-lg border bg-white px-2 py-2 sm:px-3 sm:py-2 shadow-sm"
                            >
                                <span className="text-xs sm:text-sm text-slate-700">
                                    {s.name}
                                </span>
                                <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-green-600">
                                    {s.improvement}
                                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
