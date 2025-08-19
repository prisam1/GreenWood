import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { performancePie, COLORS, studentPerformancePie, COLORS2 } from "@/mockData/charts";

export default function PerformanceChart({ title, student }: any) {
    return (
        <Card className="shadow-[0_0_20px] shadow-gray-400/30">
            <CardHeader>
                <CardTitle className={`md:text-xl text-sm font-semibold text-${student === "true" ? "blue-500" : "black"}`}>{title}</CardTitle>
                <CardDescription className="md:text-sm text-xs">
                    Overall accuracy breakdown across all students
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="gap-4 items-center mt-8">

                    {/* Chart */}
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={student === "true" ? performancePie : studentPerformancePie}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={100}
                                >
                                    {student === "true" ? performancePie.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                    )) :
                                        studentPerformancePie.map((_, i) => (
                                            <Cell key={i} fill={COLORS2[i % COLORS2.length]} />
                                        ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend */}
                    <div className="space-y-2 mt-6">
                        {student === "true" ? performancePie.map((d, i) => (
                            <div key={d.name} className="flex items-center gap-2 text-sm">
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ background: COLORS[i % COLORS.length] }}
                                />
                                <span className="text-muted-foreground">{d.name}</span>
                            </div>
                        )) :
                            studentPerformancePie.map((d, i) => (
                                <div key={d.name} className="flex items-center gap-2 text-sm">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ background: COLORS2[i % COLORS2.length] }}
                                    />
                                    <span className="text-muted-foreground">{d.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
